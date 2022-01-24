import React, { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { makePrivateRequest } from "../../../../core/utils/request";
import { formreview } from "../../../../styles";


type Props = {
    button?: boolean;
    value?: boolean;
    placeholder?: string;
    ValueMovieId?: number;
    
    
}

const FormReview = ({ value, placeholder, ValueMovieId, button}: Props) => {
  const [ addReview, setAddReview ] = useState({
    text: ""
});
  
    
  
  return (
        <View style={formreview.card}>
            <TextInput
            placeholder={placeholder}
            autoCapitalize='none'
            keyboardType='default'
            value={addReview.text}
            style={formreview.textinput}
            editable={value}
            onChangeText={(event) => setAddReview({ ...addReview, text: event})}
          />
          <TouchableOpacity
          style={formreview.button}
          disabled={button}
          //onPress={() => onSubmit()}
        >
          <Text style={formreview.textbutton}>salvar avaliação</Text>
        </TouchableOpacity>

        </View>
    );
};
export default FormReview;