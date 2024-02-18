import React from 'react';
import { View, Text } from 'react-native';
import CoursInfo from '../components/CoursInfo';

const CoursScreen= ({ route }) => {
  const { cr } = route.params;
  return (
    <View>
      <CoursInfo course={cr} />
    </View>
  );
}

export default CoursScreen;
