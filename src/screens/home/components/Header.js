import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {HeartIcon, Logo, MessageIcon, PlusIcon} from '../../../icons'

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
                    <HeartIcon size={iconSize} fill={iconColor} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                    <MessageIcon size={iconSize} fill={iconColor} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#fff',
        height: 36,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 9
    },
    actions: {
        flexDirection: 'row'
    },

    actionButton: {
        marginLeft: 20,
    }
})
