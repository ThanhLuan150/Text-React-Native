import React from 'react';
import {
  View,
  TouchableOpacity,
  Animated,
  ImageBackground,
  Image,
  Modal,
} from 'react-native';
import styles from '../styles/GameScreen';
import usePlayGame from '../hooks/usePlayGame';
const GameScreen = () => {
  const {
    selectedCup,
    isGameOver,
    cupAnimations,
    modalVisible,
    setModalVisible,
    resultImage,
    startNewGame,
    selectCup,
    isBallUnderCup,
  } = usePlayGame();
  return (
    <ImageBackground
      source={require('../assets/images/background.png')}
      style={styles.container}>
      <View style={styles.cupContainer}>
        {[0, 1, 2].map((cup, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => !isGameOver && selectCup(index)}
            style={styles.cupWrapper}>
            <View>
              <Animated.View
                style={[
                  styles.cup,
                  {transform: [{translateY: cupAnimations[index]}]},
                ]}>
                <Image
                  source={require('../assets/images/plastic-cup.png')}
                  style={styles.cupImage}
                />
              </Animated.View>
              {isGameOver && selectedCup === index && isBallUnderCup(index) && (
                <View style={styles.ball}>
                  <Image source={require('../assets/images/ball.png')} />
                </View>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {resultImage && (
              <View style={styles.viewImage}>
                <Image source={resultImage} style={styles.resultImage} />
              </View>
            )}
            <View>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                  startNewGame();
                }}>
                <Image
                  source={require('../assets/images/tap-to-restart.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
};
export default GameScreen;
