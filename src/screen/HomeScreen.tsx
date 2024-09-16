import React from 'react';
import {Image, ImageBackground, TouchableOpacity} from 'react-native';
import styles from '../styles/HomeScreen';
import useHome from '../hooks/useHome';
const HomeScreen = () => {
  const {useNavigationPlayScreen} = useHome();
  return (
    <ImageBackground
      source={require('../assets/images/home-background.png')}
      style={styles.container}>
      <Image source={require('../assets/images/logo.png')} />
      <TouchableOpacity
        style={styles.viewImage}
        onPress={useNavigationPlayScreen}>
        <Image source={require('../assets/images/tap-to-play.png')} />
      </TouchableOpacity>
    </ImageBackground>
  );
};
export default HomeScreen;
