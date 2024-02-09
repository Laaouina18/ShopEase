import React from "react";
import { View ,Text } from "react-native";
import DrawStyle from "../styles/DrawStyle";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Catalogue from "../screens/Catalogue";
import Panier from "../screens/Panier";
import Achats from "../screens/Achats";
import Icon from 'react-native-vector-icons/FontAwesome';
const DrawNavigation=()=>{

 const Drawer=createDrawerNavigator();
	return(
 <NavigationContainer >
	<Drawer.Navigator  
	screenOptions={{headerTintColor:"white",headerStyle:{backgroundColor:"green"}}}>
		<Drawer.Screen name="Catalogue" component={Catalogue} 
		   options={{
            drawerIcon: ({ color, size }) => (
				<Icon name="list-alt" size={size} color="black" />
            )}}>
		</Drawer.Screen>
		<Drawer.Screen name="Panier"  component={Panier}
		  options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="shopping-cart" size={size} color="black" />
            )
          }}>
		</Drawer.Screen>
		<Drawer.Screen name="Achats"  component={Achats}
		    options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="shopping-bag" size={size} color="black"/>
            )
          }}>
		</Drawer.Screen>
	</Drawer.Navigator>
 </NavigationContainer>
	)
}

export default DrawNavigation;