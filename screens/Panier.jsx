import React from "react";
import { useState } from "react";
import { View, Text, ScrollView, Button,Alert, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Cart from "../components/Cart";
import { acheter_cours } from "../redux/Actions";

const Panier = () => {
    const dispatch = useDispatch();
	const [idAchat,setIdAchat]=useState(1);

    const obtenirDateHeureActuelles = () => {
        const dateActuelle = new Date();
        const jour = dateActuelle.getDate();
        const mois = dateActuelle.getMonth() + 1; 
        const annee = dateActuelle.getFullYear();
        const heures = dateActuelle.getHours();
        const minutes = dateActuelle.getMinutes();
        return `${jour}/${mois}/${annee} ${heures}:${minutes}`;
    };

    const panier = useSelector((state) => state.Panier);

    const Acheter = () => {

        const achat = {
			id:idAchat,
            total:calculerPrixTotal(),
            cours: panier,
			date:obtenirDateHeureActuelles(),
			
        }
		setIdAchat(idAchat+1);
		Alert.alert(
            "Alert",
            "payer",
            [
				{ text: "Annuler", style: "cancel" },
                {
                    onPress: () => console.log("Annuler"),
                    style: "cancel"
                },
                { text: "Ok", onPress: () => dispatch(acheter_cours(achat)) }
            ]
        );
    }

    const calculerPrixTotal = () => {
        let total = 0;
        panier.forEach(cr => {
            total += cr.price; 
        });
        return total;
    };
	if (panier.length === 0) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Votre panier est vide</Text>
            </View>
        );
    }
    return (
        <ScrollView>
            {panier.map(cr => (
                <Cart  course={cr} />
            ))}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20, marginLeft: 18, marginRight: 16 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Total: {calculerPrixTotal()} €</Text>
                <Pressable onPress={Acheter}>
				<Text style={{color:'black' ,backgroundColor:"orange",padding:8,borderRadius:2,paddingLeft:12,paddingRight:12,fontWeight:"bold"}}>
				Payer
				</Text>
				</Pressable>
			
            </View>
    
        </ScrollView>
    );
};

export default Panier;
