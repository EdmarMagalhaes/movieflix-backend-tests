import React, { useEffect, useState } from 'react';
import {  Text, View, TouchableOpacity } from 'react-native';
import { navbar } from '../../../styles';
import { doLogout, isAuthenticated } from '../../utils/auth';
import { useNavigation } from '@react-navigation/native';


const NavBar: React.FC = () => {
  const navigation = useNavigation();
  const handleLogout = () => {
  doLogout();
  navigation.navigate("Login");
  }

  const [authenticated, setAuthenticated] =  useState(false);

  async function logged() {
    const result = await isAuthenticated();
  
    result ? setAuthenticated(true) : setAuthenticated(false);
  }

  useEffect(() => {
    logged();

  })

  return (
    <>
      <View style={navbar.container}>
        <View style={navbar.textcontainer}>
          <Text style={navbar.text}>MovieFlix</Text>
        </View>

        {authenticated && ( 
        <View style={navbar.buttoncontainer}>
          <TouchableOpacity style={navbar.button} onPress={handleLogout}>
            <Text style={navbar.textbutton}>SAIR</Text>
          </TouchableOpacity>
        </View>
        )}
      
      </View>
    </>
  );
}

export default NavBar;