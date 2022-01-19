import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Pages/Login";
import Movies from "../Pages/Movies";
import MovieDetails from "../Pages/Movies/MovieDetails";
import { View } from "react-native";
import NavBar from "../core/components/NavBar";

export type StackParam = {
        Login: undefined;
        Movies: undefined;
        MovieDetails: { id: Number}
}

const Stack = createStackNavigator<StackParam>();

const Routes: React.FC = ()  => {
 return (
           
         <Stack.Navigator 
         screenOptions={{
            headerTitle: " ",
            header: () => <NavBar />,

           }}>
             <Stack.Screen name="Login" component={Login} />
             <Stack.Screen name="Movies" component={Movies} />
             <Stack.Screen name="MovieDetails" component={MovieDetails} />
         </Stack.Navigator>
    
 )
}
export default Routes;