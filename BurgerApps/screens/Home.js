import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  TouchableOpacity,
  ImageBackground,
  Image
} from "react-native";
import SlidePict from '../components/SlidePict';
import Ionicons from 'react-native-vector-icons/Ionicons';

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <SlidePict />
      <View style={styles.banner}>
        <View style={styles.profile}>
          <View>
            <Text style={styles.text}>Hi King Jhonfriadi!</Text>
          </View>
          <View style={styles.notify}>
            <Ionicons style={styles.icon} name={"mail"} />
            <Ionicons style={styles.icon} name={"person"} />
            <Ionicons style={styles.icon} name={"qr-code"} />
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.card1}>
            <Image
              style={styles.stretch1}
              source={require('../assets/img/1.jpg')}
            />
            <Image
              style={styles.stretch1}
              source={require('../assets/img/2.jpg')}
            />
          </View>
          <View style={styles.card2}>
            <Image
              style={styles.stretch2}
              source={require('../assets/img/3.jpg')}
            />
            <Image
              style={styles.stretch2}
              source={require('../assets/img/4.jpg')}
            />
          </View>
        </View>
        <View style={styles.down}>
          <View>
            <Image
              style={styles.imgDown}
              source={require('../assets/img/dw1.jpg')}
            />
          </View>
          <View>
            <Image
              style={styles.imgDown}
              source={require('../assets/img/dw2.jpg')}
            />
          </View>
          <View>
            <Image
              style={styles.imgDown}
              source={require('../assets/img/dw3.jpg')}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffafa'
  },
  imgDown: {
    borderRadius: 15,
    width: 90,
    height: 90

  },
  down: {
    marginLeft: 8,
    alignSelf: 'center',
    top: 50,
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 40
  },
  card2: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 27,

  },
  card1: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    gap: 27
  },
  stretch2: {
    position: 'relative',
    width: 125,
    height: 101,
    margin: 20,
    bottom: 34,
    borderRadius: 10
  },
  stretch1: {
    position: "relative",
    width: 125,
    height: 101,
    margin: 20,
    bottom: 6,
    borderRadius: 10

  },
  banner: {
    flex: 1,
    display: 'flex'
  },

  text: {
    position: 'relative',
    top: 29,
    fontFamily: '',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10
  },
  notify: {
    position: 'relative',
    left: 92,
    top: 6,
    padding: 14,
    button: 55,
    flexDirection: 'row',
    alignSelf: 'flex-end'
  },

  profile: {
    flexDirection: 'row',
    position: 'relative',
    left: 20

  },

  icon: {
    top: 1,
    fontSize: 24,
    margin: 6,
    color: '#ed7801'
  },
  icontext: {
    color: '#ff8c00',
    fontSize: 30,
    marginLeft: 22

  },
  content: {
    alignSelf: 'center',
    backgroundColor: '#ed7801',
    width: 370,
    height: 280,
    borderRadius: 10,
    top: 14,


  }
});

export default HomeScreen  