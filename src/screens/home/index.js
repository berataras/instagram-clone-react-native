import { StyleSheet, View } from "react-native";
import {Header} from "./components";

export default function Home(props) {
    return (
        <View style={styles.container}>
            <Header />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})
