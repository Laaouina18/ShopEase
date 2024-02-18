import React from 'react';
import { View, Text, Image, Pressable,Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import {supprimer_panier,show_cours} from "../redux/Actions";
import { useDispatch } from 'react-redux';

const Cart = ({ course ,onPressDetail}) => {
	const dispatch=useDispatch();
	const handleCart = (course) => {
		Alert.alert(
			"Supprimer ",
			"Êtes-vous sûr de vouloir supprimer ce cours  ?",
			[
				{ text: "Annuler", style: "cancel" },
				{ text: "Ok", onPress: () => { dispatch(supprimer_panier(course));
				dispatch(show_cours(course)) }}
			]
		);
    
    };
    return (
        <View style={{ flexDirection: 'row', justifyContent:'space-between', backgroundColor: '#F9F9F9', borderRadius: 10, marginBottom: 10, margin: 30,padding:10 }}>
            
                <Text style={{  fontSize: 16 }}>{course.title}</Text>
				<View style={{ flexDirection: 'row',justifyContent:'space-between'}}>
				<Text style={{ color: '#666' ,fontSize:20}}>{course.price}$$</Text>
           
			   <Pressable  onPress={()=>handleCart(course)} style={{marginLeft:3}}>
				   <Ionicons name="trash-outline" size={24} color="green" testID="trash-icon" />
			   </Pressable>
			 
	
				</View>
            
        </View>
    );
}

export default Cart;
