import {useState, useEffect} from 'react';
import {Animated, Easing} from 'react-native';

const usePlayGame = () => {
  const [selectedCup, setSelectedCup] = useState(null);
  const [ballPosition, setBallPosition] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [cupAnimations, setCupAnimations] = useState([
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
  ]);
  const [cupXPositions, setCupXPositions] = useState([0, 0, 0]);
  const [modalVisible, setModalVisible] = useState(false);
  const [resultMessage, setResultMessage] = useState('');
  const [resultImage, setResultImage] = useState(null);

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    setSelectedCup(null);
    setIsGameOver(false);
    setModalVisible(false);
    setResultMessage('');
    setResultImage(null);
    const randomBallPosition = Math.floor(Math.random() * 3);
    setBallPosition(randomBallPosition);
    shuffleCups();
  };

  const shuffleCups = () => {
    // Randomize cup positions
    const positions = [0, 1, 2];
    positions.sort(() => Math.random() - 0.5);

    const xPositions = positions.map((pos, index) => (pos - index) * 100);
    setCupXPositions(xPositions);

    // Animate cup movements
    Animated.sequence([
      Animated.parallel([
        Animated.timing(cupAnimations[0], {
          toValue: xPositions[0],
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(cupAnimations[1], {
          toValue: xPositions[1],
          duration: 700,
          useNativeDriver: true,
        }),
        Animated.timing(cupAnimations[2], {
          toValue: xPositions[2],
          duration: 700,
          useNativeDriver: true,
        }),
      ]),
    ]).start(() => {
      cupAnimations.forEach(anim => anim.setValue(0));
    });
  };

  const animateCupLift = index => {
    Animated.timing(cupAnimations[index], {
      toValue: -50,
      duration: 500,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start();
  };

  const selectCup = index => {
    if (!isGameOver) {
      setSelectedCup(index);
      setIsGameOver(true);
      animateCupLift(index);

      if (isBallUnderCup(index)) {
        setResultMessage('You Win!');
        setResultImage(require('../assets/images/you-win.png'));
      } else {
        setResultMessage('You Lost!');
        setResultImage(require('../assets/images/you-lose.png'));
      }

      setModalVisible(true);
    }
  };

  const isBallUnderCup = index => {
    return ballPosition === index;
  };

  return {
    selectedCup,
    setSelectedCup,
    ballPosition,
    setBallPosition,
    isGameOver,
    setIsGameOver,
    cupAnimations,
    cupXPositions,
    modalVisible,
    setModalVisible,
    resultMessage,
    setResultMessage,
    resultImage,
    setResultImage,
    startNewGame,
    shuffleCups,
    animateCupLift,
    selectCup,
    isBallUnderCup,
  };
};

export default usePlayGame;
