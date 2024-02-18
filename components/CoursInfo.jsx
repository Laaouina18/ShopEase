import React from 'react';
import { View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import Header from './Header';
import Footer from './Footer';

const CourseInfo = ({ course }) => {
    return (

		<View style={{ flexDirection:'column'}}>
		<Header cr={course}/>
		<View style={{ flexDirection:'column' ,backgroundColor:'white',height:'68%'}}>
            <Image source={{ uri: course.image }} style={{ width: '100%', height: 200 }} />
            
                <Text style={{ padding: 20,justifyContent:'center',alignItems:'center'}}>{course.description}</Text>
				</View>
				<Text style={{ padding:40,marginBottom:50,textAlign:'right',fontSize:20,fontWeight:'bold',color:'green'}}>{course.price}$$</Text>
				<Footer cr={course}/>
            </View>
       
    );
}

export default CourseInfo;
