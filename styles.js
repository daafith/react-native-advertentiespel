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
        backgroundColor: '#ff7e59',
        backfaceVisibility: 'hidden',
        borderRadius: 10,
    },
    kopBack: {
        width: Dimensions.get('window').width -10,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 126, 89, 0.3)',
        backfaceVisibility: 'hidden',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.35)'
    },
    aanbodFront: {
        width: Dimensions.get('window').width -10,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffe577',
        backfaceVisibility: 'hidden',
        borderRadius: 10,
    },
    aanbodBack: {
        width: Dimensions.get('window').width -10,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 229, 119, 0.3)',
        backfaceVisibility: 'hidden',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.35)'
    },
    beschrijvingFront: {
        width: Dimensions.get('window').width -10,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4eb80b',
        backfaceVisibility: 'hidden',
        borderRadius: 10,
    },
    beschrijvingBack: {
        width: Dimensions.get('window').width -10,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(78, 184, 11, 0.3)',
        backfaceVisibility: 'hidden',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.35)'
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
    }
});