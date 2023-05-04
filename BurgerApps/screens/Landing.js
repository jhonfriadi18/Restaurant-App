import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground
} from "react-native";
const LandingPage = ({ navigation }) => {
  return (
    <View style={styles.content}>
      <ImageBackground
        source={require('../assets/img/bg.png')}
        style={styles.background}
      >
        <Image
          style={styles.image}
          source={require('../assets/img/Logo.png')}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("TabBottom")}
          style={styles.button}
        >
          <Text style={styles.findMore}><Text style={styles.text}>GET STARTED</Text></Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center'
  },
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100%",

    backgroundColor: "white",
  },
  findMore: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center"
  },
  image: {
    position: "relative",
    width: 341,
    height: 341,
    top: 200,
    alignSelf: 'center'
  },

  button: {
    alignSelf: "center",
    position: 'relative',
    top: 230,
    width: 230,
    height: 48,
    borderRadius: 40,
    justifyContent: 'center',
    backgroundColor: '#FF0000'
  },
  background: {
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
  },

});

export default LandingPage;