import React from 'react';
import { View ,ScrollView,Text,Alert} from 'react-native';
import CourseItem from '../components/CoursItem';
import coursesData from '../data/data';
import { useDispatch ,useSelector} from 'react-redux';
import { useEffect } from 'react';
import CoursScreen from './CoursScreen';
import {ajouter_panier} from "../redux/Actions";

const Catalogue=({navigation})=>{
	const dispatch=useDispatch();
	const handleAddToCart = (course) => {
		Alert.alert(
            "Alert",
            "Ajouter au panier",
            [
                {
                    onPress: () => console.log("Annuler"),
                    style: "cancel"
                },
                { text: "Ok", onPress: () => dispatch(ajouter_panier(course)) }
            ]
        );
     

    };
	const data = useSelector((state) => state.Cours);
    const filteredData = data.filter(cr => !cr.selected);

	return (
		<ScrollView>
			{
				filteredData.map(cr=> (
					<CourseItem  course={cr} onPressDetail={() => navigation.navigate('CoursScreen', {cr})} panier={()=>handleAddToCart(cr)}/>
				))
			}
		</ScrollView>
    );
	
}
export default Catalogue;