import React from 'react';
import { View ,ScrollView} from 'react-native';
import CourseItem from '../components/CoursItem';
import coursesData from '../data/data';
const Catalogue=()=>{
	return (
		<ScrollView>
			<View>
		
		{coursesData.map(course => (
			<CourseItem key={course.id} course={course} />
		))}
	</View>
		</ScrollView>
        
    );
	
}
export default Catalogue;