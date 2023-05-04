import {
    StyleSheet,
    View,
    SafeAreaView,
    Image,
    ActivityIndicator,
    TouchableOpacity,
    ImageBackground
} from "react-native";
import { Modal, Portal, Text, Button, Provider } from "react-native-paper";
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { currencyFormatter } from "../helpers/currency";
import { gql, useQuery } from "@apollo/client";

const READ_ITEM_DETAILS = gql`
    query itemDetail($itemId: ID) {
      item(id: $itemId) {
        id
        name
        description
        price
        imgUrl
        Ingredients {
          name
        }
        Category {
          name
        }
        User {
          email
          username
        }
      }
    }
  `;

const Detail = ({ route }) => {
    const id = route.params.id;
    const navigation = useNavigation();
    const { loading, error, data } = useQuery(READ_ITEM_DETAILS, {
        variables: {
            itemId: id,
        },
    });
    console.log(data);
    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: "white", padding: 50, minHeight: "20%" };
    if (loading) {
        return (
            <SafeAreaView style={styles.containerLoad}>
                <ActivityIndicator  style={styles.loading} />
            </SafeAreaView>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerIcon}>
                <TouchableOpacity onPress={() => navigation.navigate('TabBottom')}>
                    <Ionicons style={styles.icon1} name={"close-outline"} />
                </TouchableOpacity>
            </View>
            <Provider>
                <Portal>
                    <Modal
                        visible={visible}
                        onDismiss={hideModal}
                        contentContainerStyle={containerStyle}                    >
                        <Text style={styles.textTitleIngredients}>Ingredients of {data?.item.name}</Text>
                        {data?.item.Ingredients?.map((item) => {
                            return (
                                <Text style={styles.textIngredients} key={item.id}>- {item.name}</Text>
                            )
                        })}
                        <Text style={styles.textTitleByUser}>created by : {data?.item.User?.username}</Text>
                    </Modal>
                </Portal>
                <View style={styles.content}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: data?.item.imgUrl,
                        }}
                    />
                    <View style={
                        styles.detail
                    }>
                        <Text style={styles.textTitle}>{data?.item.name}</Text>
                        <Text style={styles.textDescription}>{data?.item.description} categories {data?.item.Category?.name}</Text>
                    </View>
                    <View style={styles.price}>
                        <Text style={{
                            textAlign: 'center',
                            marginBottom: 2,
                            position: 'relative',
                            top: 10
                        }}>PRICE</Text>
                        <Text style={styles.textPrice}>
                            {currencyFormatter.format(+data?.item.price)}
                        </Text>
                        <Ionicons style={styles.icon} name={"fast-food-outline"} />
                    </View>
                    <Button style={styles.button} onPress={showModal}>
                        <Text style={{
                            textAlign: 'center',
                            fontSize: 15,
                            fontWeight: "bold",
                            position: 'relative',
                        }}>SHOW INGREDIENT</Text>
                    </Button>
                    <Ionicons style={{
                        position: 'relative',
                        bottom: 43,
                        color: '#ed7801',
                        fontSize: 35,
                        right: 30,
                        fontWeight: "bold",
                        alignSelf: 'flex-end'
                    }} name={"add-outline"} />
                </View>
            </Provider>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    headerIcon: {
        flexDirection: 'row',
    },
    container: {
        flex: 1,
        backgroundColor: '#ffff'
    },
    icon1: {
        color: '#ed7801',
        fontWeight: '900',
        fontSize: 30,
        position: 'relative',
        top: 40,
        left: 18,

    },
    iconA: {
        position: 'relative',
        left: 260,
        top: 35,
        fontSize: 26,
        color: '#ed7801',
        fontWeight: '900',
    },
    iconb: {
        position: 'relative',
        left: 270,
        top: 35,
        fontSize: 26,
        color: '#ed7801',
        fontWeight: '900',
    },
    icon: {
        position: "relative",
        top: 2,
        color: '#ed7801',
        fontSize: 30,
        alignSelf: 'flex-end'
    },
    price: {
        borderWidth: 1,
        borderColor: '#',
        marginTop: 30,
        width: 190,
        height: 60,
        borderRadius: 5,
        backgroundColor: '#ffff',
        justifyContent: 'center'
        
    },
    detail: {
        marginTop: 15,
        alignSelf: 'center',
        width: 350
    },
    content: {
        marginTop: 47,
        flex: 2,
        alignItems: "center",
        minHeight: "100%",
    },
    image: {
        width: 380,
        height: 270,
    },
    imgBg: {
        width: "100%",
        height: "100%",
    },
    textTitle: {
        color: "#8b542f",
        fontSize: 28,
        fontWeight: "bold",
        textAlign: 'center',
        width: 380,
    },
    textDescription: {
        marginTop: 3,
        fontSize: 15,
    },
    textPrice: {
        position: 'relative',
        top: 10,
        fontSize: 17,
        textAlign: 'center'
    },
    textTitleIngredients: {
        color: "#000000",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10
    },

    button: {
        borderWidth: 1,
        alignSelf: 'center',
        borderColor: '#c0c0c0',
        position: "relative",
        top: 30,
        width: "95%",
        margin: 20,
        height: 70,
        padding: 7,
    },
    textButton: {
        fontSize: 18,
        color: "black",
    },
    containerLoad: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    loading: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    textTitleByUser: {
        color: "#000000",
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 4
    },
});

export default Detail;
