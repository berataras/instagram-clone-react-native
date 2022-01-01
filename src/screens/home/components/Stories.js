import {View, ScrollView, Text, Image, StyleSheet} from "react-native";
import {LinearGradient} from "expo-linear-gradient";

//api
import {stories} from '../../../api'


export default function Stories(props) {
    return (
        <View style={styles.stories}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {stories.map((story) => (
                    <View key={story.id} style={styles.story}>
                        <LinearGradient colors={['#DE0046', '#F7A34B']} style={styles.linear}>
                            <Image source={{uri: story.user.avatar}} style={styles.avatar} />
                        </LinearGradient>
                        <Text style={styles.username} numberOfLines={1}>{story.user.username}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    stories: {
        paddingVertical: 10,
        borderBottomWidth: 0.5,
        borderColor: '#DADADA'
    },
    story: {
        marginHorizontal: 8,
        alignItems: 'center',
        textAlign: 'center',
        width: 67
    },
    linear:{
        width: 65,
        height: 65,
        borderRadius: 33.5,
        alignItems: "center",
        justifyContent: "center"
    },
    avatar:{
        width: 60,
        height: 60,
        borderRadius: 60,
        borderWidth: 3,
        borderColor: '#fff'
    },
    username: {
        marginTop: 5,
        fontSize: 12
    }
})
