import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSkull } from '@fortawesome/free-solid-svg-icons';
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';

export default function Shop({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.shop} ><Text style={styles.shopTitle}>Welcome to the shop</Text>
                <TouchableOpacity style={styles.powerUp}>
                    <Text style={styles.itemTitle}>Power Ups - Yellow color</Text>
                    <FontAwesomeIcon icon={ faBoltLightning } />
                </TouchableOpacity>
                <TouchableOpacity style={styles.curses}>
                    <Text style={styles.itemTitle}>Curses - Purple Color</Text>
                    <FontAwesomeIcon icon={ faSkull } />
                </TouchableOpacity>
                <TouchableOpacity style={styles.secret}>
                    <Text style={styles.itemTitle}>Shuffle cards or secrets? - Blue?</Text>
                    <FontAwesomeIcon icon={ faQuestionCircle } />
                </TouchableOpacity>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    shop: {
        height: '100%',
        width: '100%'
    },
    shopTitle: {
        fontSize: 25,
        textAlign: "center",
        color: 'white'
    },
    powerUp: {
        backgroundColor: '#D6CA98',
        flexDirection: 'column',
        height: '25%',
        borderWidth: 1,
        width: 400,
        margin: 10
    },
    curses: {
        backgroundColor: '#AB92BF',
        flexDirection: 'column',
        height: '25%',
        borderWidth: 1,
        width: 400,
        margin: 10
    },
    secret: {
        backgroundColor: '#4E6E5D',
        flexDirection: 'column',
        height: '25%',
        borderWidth: 1,
        width: 400,
        margin: 10
    },

    itemTitle: {
        color: 'black'
    },


});
