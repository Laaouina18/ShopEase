import React, { useState } from 'react';
import { View, Button, Image, Linking, ScrollView,Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

export default function Camera() {
  const [image, setImage] = useState("https://www.breizhpower.fr/wp-content/uploads/23b72532ceb2907afdbbb731d2e57cdb.jpg");

  const takePicture = async () => {
    if (Constants.platform.ios || Constants.platform.android) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [ 4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
		
        setImage(result.assets[0].uri);
      }
    } else {
      console.log('La caméra n\'est pas prise en charge sur cette plateforme.');
    }
  };

  const pickImage = async () => {
    if (Constants.platform.ios || Constants.platform.android) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
		
        setImage(result.assets[0].uri);
      }
    } else {
      console.log('La galerie d\'images n\'est pas prise en charge sur cette plateforme.');
    }
  };

  const openGoogleImage = () => {
    Linking.openURL('https://www.google.com/images');
  };

  return (
	<ScrollView>
		 <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between' }}>
      <Button title="Ouvrir l'appareil photo" onPress={takePicture} />
      <Button title="Ouvrir la galerie d'images" onPress={pickImage} />
      <Button title="Ouvrir une image Google" onPress={openGoogleImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
	
    </View>
	</ScrollView>
   
  );
}
