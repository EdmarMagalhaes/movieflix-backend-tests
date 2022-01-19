import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { formreview } from "../../../../styles"

type Props = {
    value?: boolean;
    placeholder?: string;
    ValueMovieId?: number  
}

const FormReview = ({ value, placeholder, ValueMovieId}: Props) => {
  
    
    return(
        <View style={formreview.card}>
            <TextInput
            placeholder={placeholder}
            autoCapitalize='none'
            keyboardType='default'
            style={formreview.textinput}
            editable={value}
            //value={userInfo.username}
            // onChangeText={(e) => {
            //   const newUserInfo = { ...userInfo };
            //   newUserInfo.username = e;
            //   setUserInfo(newUserInfo);
            // }}
          />
          <TouchableOpacity
          style={formreview.button}
          //onPress={() => handleLogin()}
        >
          <Text style={formreview.textbutton}>salvar avaliação</Text>
        </TouchableOpacity>

        </View>
    );
};
export default FormReview;