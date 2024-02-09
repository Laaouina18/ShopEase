import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const CourseItem = ({ course }) => {
    return (
        <View style={{ flexDirection: 'column', alignItems: 'center', backgroundColor: '#F9F9F9', borderRadius: 10, marginBottom: 10, margin: 30 }}>
            <Image source={{ uri: course.image }} style={{ width: '100%', height: 200, borderRadius: 10 }} resizeMode="cover" />

            
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{course.title}</Text>
                <Text style={{ color: '#666' }}>Prix: {course.price}</Text>
           
            <View style={{ flexDirection: 'row', justifyContent: 'space-end', paddingHorizontal: 10, marginBottom: 10 }}>
                <Pressable style={{ flexDirection: 'row', alignItems: 'end'}}>
                    <Ionicons name="eye" size={24} color="black" style={{ marginRight: 5 }} />
                </Pressable>
                <Pressable style={{ flexDirection: 'end', alignItems: 'right' }}>
                    <Ionicons name="cart" size={24} color="black" style={{ marginRight: 5 }} />
                   
                </Pressable>
            </View>
        </View>
    );
}

export default CourseItem;
