import HomeStack from "./navigators/HomeStack";
import {ApolloProvider} from "@apollo/client"
import client from "./configs/apollo"
export default function App() {
  return (
    <ApolloProvider client={client}>
    <HomeStack />
    </ApolloProvider>
  );
}
