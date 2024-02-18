import React, { useState } from 'react';
import { View, Text, Image, Pressable, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { supprimer_panier, show_cours, supprimer_achat } from "../redux/Actions";
import { useDispatch } from 'react-redux';

const Achat = ({ achat }) => {
 
    const [showCours, setShowCours] = useState(false); 


    return (
        <View style={{ backgroundColor: '#F9F9F9', borderRadius: 10, marginBottom: 10, margin: 30, padding: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>

                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{achat.total}$$</Text>
                <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}> {achat.date}</Text>

                    <Pressable style={{alignItems:'flex-end',paddingTop:10}} onPress={() => setShowCours(!showCours)}>
                        <Ionicons name={showCours ? "remove-circle-outline" : "add-circle-outline"} size={24} color="black" />
                    </Pressable>


                </View>

            </View>
            <View style={{ height: 1, backgroundColor: 'grey', marginHorizontal: 30, marginTop: 10 }} />
            {showCours && 
                achat.cours.map((prv) =>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                        <Text style={{ fontWeight: 'bold' }}>
                            {prv.title}
                        </Text>
                        <Text style={{ color: 'grey', fontSize: 20 }}>
                            {prv.price}$$
                        </Text>
                    </View>
                )
            }
        </View>
    );
}

export default Achat;
