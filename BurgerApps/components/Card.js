import * as React from "react";
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { Card, Title } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
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

const MyComponent = ({ loading, data }) => {
  // const { loading, error, data } = useQuery(READ_ITEMS);

  const navigation = useNavigation();
  if (loading) {
    return (
      <ScrollView>
        <View style={styles.container}>
          <ActivityIndicator style={styles.loading} />
        </View>
      </ScrollView>
    )
  }
  return (

      <View style={styles.container}>
        {data?.items.map((item) => {
          return (
            <Card style={styles.card} key={item.id}>
              <TouchableOpacity onPress={() => navigation.navigate('Detail', { id: item.id })}>
                <Card.Content>
                  <Image
                    source={{
                      uri: item.imgUrl,
                    }}
                    style={styles.image}
                  />
                  <Title style={styles.title}>{item.name}</Title>
                </Card.Content>
              </TouchableOpacity>
            </Card>
          )
        })}
      </View>


  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: 'row',
    flexWrap: "wrap",
    gap: 18,
    marginTop: 50,
    height: 700,
    justifyContent: "center"
  },
  card: {
    marginTop: 20,
    width: 170,
    height: 220,
    opacity: 5,
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 5
  },
  title: {
    textAlign: "center",
    alignItems: "center",
    fontSize: 16,
  },
  image: {
    marginTop: 15,
    width: 140,
    minHeight: 120,
    marginBottom: 9,
    borderRadius: 8,
  },
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default MyComponent;
