import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import {MoreIcon, HeartIcon, CommentIcon, SendIcon, BookmarkIcon} from "../icons";
import {FitImage} from '../components'
import ReadMore from "@fawazahmed/react-native-read-more";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime);

export default function Post({post}) {
    return (
        <View style={styles.post}>
            <View style={styles.header}>
                <View style={styles.user}>
                    <Image style={styles.avatar} source={{uri: post.user.avatar}} />
                    <Text style={styles.username}>{post.user.username}</Text>
                </View>
                <MoreIcon size={20} fill="black" />
            </View>
            <FitImage src={post.image} />
            <View style={styles.postInfos}>
                <View style={styles.actions}>
                    <View style={styles.action}>
                        <TouchableOpacity style={styles.actionButton}>
                            <HeartIcon size={25} fill="black"/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actionButton}>
                            <CommentIcon size={25} fill="black" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actionButton}>
                            <SendIcon size={25} fill="black" />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <BookmarkIcon size={25} fill="black" />
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.likes}>{post.likes} Likes</Text>
                <ReadMore animate={true} numberOfLines={2} seeLessText="" ellipsis="..." seeMoreStyle={styles.moreText} seeMoreText="more" style={styles.description}>
                    <Text style={styles.username}>{post.user.username}</Text>
                    {`  `}
                        {post.description}
                </ReadMore>
                {post.comments > 2 && (
                    <TouchableOpacity>
                        <Text style={styles.showCommentsText}>View all {post.comments} comments</Text>
                    </TouchableOpacity>
                )}
                <View style={styles.bottom}>
                    <Text style={styles.date}>{dayjs(post.date).fromNow()}</Text>
                    <Text style={styles.translation}>See Translation</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    post: {
        marginBottom: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 49,
        paddingHorizontal: 15,
        marginVertical: 10
    },
    avatar: {
        height: 36,
        width: 36,
        borderRadius: 30
    },
    user:{
      flexDirection: 'row',
        alignItems: 'center'
    },
    username:{
        marginLeft: 9,
        fontWeight: '600',
        fontSize: 14
    },
    image: {
        width: '100%',
        height: 1080,
    },
    postInfos: {
        paddingHorizontal: 13,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 12,
        marginBottom: 9,
    },
    action:{
        flexDirection: 'row'
    },
    actionButton: {
        marginRight: 14
    },
    likes: {
        fontWeight: '600',
        marginTop: 7
    },
    description: {
        marginVertical: 8
    },
    moreText: {
        color: '#999999',
        fontWeight: '500'
    },
    showCommentsText: {
        opacity: 0.5,
        fontWeight: '500'
    },
    bottom: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
    date: {
        opacity: 0.5,
        fontSize: 13,
        fontWeight: '500'
    },
    translation: {
        fontSize: 12,
        flexDirection: "row",
        fontWeight: '600',
        marginLeft: 10
    }
})
