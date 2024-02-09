import React from 'react';
import { View ,ScrollView,Text} from 'react-native';
import CourseItem from '../components/CoursItem';
import coursesData from '../data/data';
import { UseDispatch ,useSelector} from 'react-redux';
import { useEffect } from 'react';
import COURSES from '../data/data';

const Catalogue=()=>{
	
	const data =useSelector((state)=>state.Cours)

	return (
		<ScrollView>
			{
				data.map(course => (
					<CourseItem key={course.id} course={course} />
				))
			}
		</ScrollView>
    );
	
}
export default Catalogue;