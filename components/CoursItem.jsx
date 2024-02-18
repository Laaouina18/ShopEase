import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const CourseItem = ({ course, onPressDetail, panier }) => {

    return (
        <View style={{ flexDirection: 'column', backgroundColor: '#F9F9F9', borderRadius: 10, marginBottom: 10, margin: 30 }}>
            <Image source={{ uri: course.image }} style={{ width: '100%', height: 170, borderRadius: 10 }} resizeMode="cover" />

            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'green', padding: 3 }}>{course.title}</Text>
                <Text style={{ color: '#666', textAlign: 'center' }}>{course.price}</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, marginBottom: 10,padding:3 }}>
                <Pressable style={{ flexDirection: 'row', alignItems: 'end' }} onPress={onPressDetail}>
                    <Ionicons name="eye" size={24} color="green" style={{ marginRight: 5 }} />
                </Pressable>
                <Pressable style={{ flexDirection: 'end', alignItems: 'right' }} onPress={panier}>
                    <Ionicons name="cart" size={24} color="green" style={{ marginRight: 5 }} />
                </Pressable>
            </View>
        </View>
    );
}

export default CourseItem;
