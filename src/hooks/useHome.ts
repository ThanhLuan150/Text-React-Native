import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../type/type';
const useHome = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const useNavigationPlayScreen = () => {
    navigation.navigate('GamePlayScreen');
  };
  return {
    useNavigationPlayScreen
  }
};
export default useHome;
