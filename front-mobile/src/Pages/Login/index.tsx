import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import eyesOpened from '../../assets/eyes-opened.png';
import eyesClosed from '../../assets/eyes-closed.png';
import { logincontainer, theme } from '../../styles';
import { doLogout, isAuthenticated, login } from '../../core/utils/auth';
import Toast from 'react-native-tiny-toast';

const Login: React.FC = () => {
  const navigation = useNavigation();
  const [hidePassword, setHidePassword] = useState(true);
  const [useFetchData, setUseFetchData] = useState({});
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({ username: "", password: "" });

  useEffect(() => {

    isAuthenticated();
    doLogout();
  }, []);

  async function handleLogin() {
    setLoading(true)
    await login(userInfo)
        .then(() => navigation.navigate("Movies"))
        .catch(() => Toast.show("Email ou Senha invalidos...", {
            containerStyle:{
                backgroundColor: '#407BFF',
                borderRadius: 15,
               },
               textStyle:{
                color:'#fff',
                fontWeight: "bold"
               },
               imgStyle:{},
               mask:false,
               maskStyle:{},
               duration: 3000,
               animation: true,   
        }))
        .finally(() => setLoading(false))
}
  return (

    <View style={theme.container}>
      <View style={logincontainer.card}>
        <Text style={logincontainer.title}>login</Text>
        <View style={logincontainer.form}>
          <TextInput
            placeholder='Email'
            autoCapitalize='none'
            keyboardType='email-address'
            style={logincontainer.textinput}
            value={userInfo.username}
            onChangeText={(e) => {
              const newUserInfo = { ...userInfo };
              newUserInfo.username = e;
              setUserInfo(newUserInfo);
            }}
          />
          <View style={logincontainer.password}>
            <TextInput
              placeholder='Senha'
              autoCapitalize='none'
              style={logincontainer.textinput}
              value={userInfo.password}
              secureTextEntry={hidePassword}
              onChangeText={(e) => {
                const newUserInfo = { ...userInfo };
                newUserInfo.password = e;
                setUserInfo(newUserInfo);
              }}
            />
            <TouchableOpacity
              style={logincontainer.toggle}
              onPress={() => setHidePassword(!hidePassword)}
            >
              <Image
                source={hidePassword ? eyesClosed : eyesOpened}
                style={logincontainer.eyes}

              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={logincontainer.button}
          onPress={() => handleLogin()}
        >
          <Text style={logincontainer.textbutton}>fazer login</Text>
        </TouchableOpacity>
        {loading && (
          <>
          <View style={logincontainer.activityindicator}>
          <ActivityIndicator size="large" color="#E1E1E1" />
          </View>
          </>
        )
        }
      </View>
    </View>



  );
}
export default Login;