import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {HeartIcon, Logo, SendIcon, PlusIcon} from '../../../icons'

function Header(props) {
    const iconSize = 24;
    const iconColor = '#000';
    return (
        <View style={styles.header}>
            <Logo fill="#000" />
            <View style={styles.actions}>
                <TouchableOpacity style={styles.actionButton}>
                    <PlusIcon size={iconSize} fill={iconColor} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton} >
                    <View style={styles.heartDot} />
                    <HeartIcon size={iconSize} fill={iconColor} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                    <SendIcon size={iconSize} fill={iconColor} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#fff',
        height: 44,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 9,
        paddingBottom: 20
    },
    actions: {
        flexDirection: 'row'
    },
    actionButton: {
        marginLeft: 20,
    },
    heartDot: {
        position: 'absolute',
        right: -0.4,
        top: 0,
        height: 9,
        width: 9,
        backgroundColor: '#FF4963',
        borderRadius: 8,
        zIndex: 2,
        borderWidth: 0.8,
        borderColor: '#fff'
    }
})
