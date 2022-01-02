import { StyleSheet, View, ScrollView } from "react-native";
import {Header, Stories} from "./components";
import {Post} from '../../components';
import {posts} from '../../api';

export default function Home(props) {
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Stories />
                {posts.map((post) => (
                    <Post key={post.id} post={post} />
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})
