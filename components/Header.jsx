import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 
import Panier from '../screens/Panier';
const Header = ({cr}) => {
	const navigation = useNavigation();
  
	return (
	  <View style={{ flexDirection: 'row', justifyContent: 'space-between',marginTop:20, padding: 20 ,backgroundColor:'green'}}>
	  <View  style={{ alignSelf: 'flex-end',color:"white" ,flexDirection:'row'}}>
	  <Pressable onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back" size={24} color="white" />
            </Pressable>
			<Text style={{fontWeight:'bold',color:"white",marginTop:3,fontSize:18}}>Landing {cr.title}</Text>
	  </View>
	
		<Ionicons name="cart" size={24} color="black" style={{ marginRight: 5,color:"white" }} onPress={()=>navigation.navigate('Panier')} />
	  </View>
	);
  };
  export default Header;