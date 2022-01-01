import { StyleSheet, View } from "react-native";
import {Header, Stories} from "./components";

export default function Home(props) {
    return (
        <View style={styles.container}>
            <Header />
            <Stories />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})
