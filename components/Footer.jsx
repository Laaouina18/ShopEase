import React from 'react';
import { View, Text, Pressable, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 
import { useDispatch, useSelector } from 'react-redux';
import { ajouter_panier } from '../redux/Actions';

const Footer = ({ cr }) => {
    const panier = useSelector((state) => state.Panier);
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const Panier = (course) => {
        const existingCourse = panier.find(item => item.id === course.id);
        if (existingCourse) {
            Alert.alert(
                "Cours déjà ajouté",
                "Ce cours est déjà dans votre panier.",
                [{ text: "Ok" }]
            );
        } else {
            Alert.alert(
                "Ajouter au panier",
                "Êtes-vous sûr de vouloir ajouter ce cours au panier ?",
                [
                    { text: "Annuler", style: "cancel" },
                    { text: "Ok", onPress: () => dispatch(ajouter_panier(course)) }
                ]
            );
        }
    };

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20, backgroundColor: 'green', position: 'absolute', bottom: 0, left: 0, right: 0 }}>
            <Pressable onPress={() => navigation.goBack()} style={{ alignSelf: 'flex-end' }}>
                <Ionicons name="chevron-back" size={24} color="white" />
            </Pressable>
            <Pressable style={{ backgroundColor: 'orange', padding: 10, borderRadius: 5 }} onPress={() => Panier(cr)}>
                <Text style={{ color: 'black' }}>Ajouter au panier</Text>
            </Pressable>
        </View>
    );
};

export default Footer;
