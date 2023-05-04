import {
    View,
    Text,
    StatusBar,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Image,
    FlatList,
    Dimensions

} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Card from '../components/Card'
import { gql, useQuery } from "@apollo/client";

const READ_ITEMS = gql`
  query Items {
    items {
      id
      name
      imgUrl
    }
  }
`;


const yScreen = Dimensions.get("window").height

const MenuScreen = () => {
    const { loading, error, data } = useQuery(READ_ITEMS);
    
    return (
        <View style={styles.container}>
            <View style={styles.headerIcon}>
                <Ionicons style={styles.icon} name={"chevron-back-outline"} />
                <Ionicons style={styles.iconA} name={"search-outline"} />
                <Ionicons style={styles.iconb} name={"cart-outline"} />
            </View>
            <View style={{ marginHorizontal: 20, marginBottom: 20, marginTop: 12 }}>
                <Image
                    style={styles.logo}
                    source={require('../assets/img/menu.jpg')}
                />
            </View>
            <SafeAreaView >
                <ScrollView contentContainerStyle>
                    <Card data={data} />
                    <View style={{minHeight: yScreen - 350}}></View>
                </ScrollView>
            </SafeAreaView>
        </View>


    )
}
const styles = StyleSheet.create({
    logo: {
        width: 220,
        height: 40,
        top: 30,
        borderRadius: 20
    },
    container: { flex: 1, backgroundColor: '#fffafa' },
    icon: {
        color: '#ed7801',
        fontWeight: '900',
        fontSize: 30,
        position: 'relative',
        top: 35,
        left: 22
    },
    headerIcon: {
        flexDirection: 'row'
    },
    iconA: {
        position: 'relative',
        left: 280,
        top: 35,
        fontSize: 26,
        color: '#ed7801',
        fontWeight: '900',
    },
    iconb: {
        position: 'relative',
        left: 300,
        top: 35,
        fontSize: 26,
        color: '#ed7801',
        fontWeight: '900',
    },
    menus: {
        display: "flex",
        flexDirection: 'row',
        flexWrap: "wrap",
        gap: 18,
        justifyContent: 'center',
        marginTop: 50,
        height: 700,
    }

})

export default MenuScreen;