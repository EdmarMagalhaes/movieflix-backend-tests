import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


 function Header() {
  const handleOnPress = () => {
    
  }
  
  return (
    <>
    
    <View style={styles.container}>
     <View style={styles.textcontainer}>
     <Text style={styles.text}>MovieFlix</Text>

     </View>
     <View style={styles.buttoncontainer}>
     <TouchableOpacity style={styles.button} onPress={handleOnPress}>
         <Text style={styles.textbutton}>SAIR</Text>
       </TouchableOpacity>
     </View>
     </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#FFC700',
      height: 108,
      flexDirection: 'row',
      justifyContent: 'space-between'
      
  },
  textcontainer: {
  paddingLeft: 18,
  paddingTop: 45,
    
  },
  
  buttoncontainer: {
    paddingRight: 19,
    paddingTop: 45,
  },

  
  text: {
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 33,
    letterSpacing: -0.24,
    color: '#000',
    fontFamily: 'OpenSans_700Bold'
  },

  button: {
    backgroundColor: '#FFC700',
    flexDirection: 'row',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    height: 30,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textbutton: {
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 19,
    letterSpacing: -0.24,
    
  }
      

  
});

export default Header;