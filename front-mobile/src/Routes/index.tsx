import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Pages/Login";
import Movies from "../Pages/Movies";
import { View } from "react-native";
import NavBar from "../core/components/NavBar";

const Stack = createStackNavigator();

const Routes: React.FC = ()  => {
 return (
           
         <Stack.Navigator 
         screenOptions={{
            headerTitle: " ",
            header: () => <NavBar />,

           }}>
             <Stack.Screen name="Login" component={Login}></Stack.Screen>
             <Stack.Screen name="Movies" component={Movies}></Stack.Screen>
         </Stack.Navigator>
    
 )
}

export default Routes;