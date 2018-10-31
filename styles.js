import {StyleSheet, Dimensions, Platform} from "react-native";

function getFont() {
    return Platform.OS === 'ios' ? 'American Typewriter' : 'Roboto';
}

export const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    kopFront: {
        width: Dimensions.get('window').width -10,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 126, 89, 0.75)',
        backfaceVisibility: 'hidden',
        borderRadius: 10,
    },
    kopBack: {
        width: Dimensions.get('window').width -10,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 126, 89, 0.25)',
        backfaceVisibility: 'hidden',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'rgba(255, 126, 89, 0.45)'
    },
    aanbodFront: {
        width: Dimensions.get('window').width -10,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 229, 119, 0.75)',
        backfaceVisibility: 'hidden',
        borderRadius: 10,
    },
    aanbodBack: {
        width: Dimensions.get('window').width -10,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 229, 119, 0.25)',
        backfaceVisibility: 'hidden',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'rgba(255, 229, 119, 0.45)'
    },
    beschrijvingFront: {
        width: Dimensions.get('window').width -10,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(78, 184, 11, 0.75)',
        backfaceVisibility: 'hidden',
        borderRadius: 10,
    },
    beschrijvingBack: {
        width: Dimensions.get('window').width -10,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(78, 184, 11, 0.25)',
        backfaceVisibility: 'hidden',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'rgba(78, 184, 11, 0.45)'
    },
    flipText: {
        width:  Dimensions.get('window').width -30,
        fontFamily: getFont(),
        textAlign: 'center',
        fontSize: 18,
        color: '#000',
        fontWeight: '300',
    },
    toggleView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    toggleText: {
        paddingRight: 40,
        textAlign: 'center',
        fontFamily: getFont(),
    },
    spacing: {
        paddingTop: 5,
        paddingBottom: 5,
    },
    header: {
        paddingBottom: 30,
        fontFamily: getFont(),
        textAlign: 'center',
        fontSize: 24,
        color: '#713030',
        fontWeight: '300',
        opacity: 0.25,
        transform: [
            { perspective: 300 },
            { rotateY: '30deg'},
            { skewY: '-10deg'},
        ]
    }
});