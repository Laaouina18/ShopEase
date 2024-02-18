import React from "react";
import {ScrollView,View,Text} from "react-native";
import { useSelector } from "react-redux";
import Achat from "../components/Achat";
const Achats=()=>{
const achats=useSelector((state)=>state.Achats)
if (achats.length === 0) {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Vous n'avez aucune achat</Text>
		</View>
	);
}
	return(
		<ScrollView>
			{
			achats &&	achats.map(ach=> (
			<Achat achat={ach}/>))}
		</ScrollView>
	)
}
export default Achats;