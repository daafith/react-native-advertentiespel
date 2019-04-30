import {StyleSheet, Dimensions, Platform} from "react-native";

function font() {
    return Platform.OS === 'ios' ? 'System' : 'Roboto';
}

function boardWidth() {
    return Dimensions.get('window').width - 10;
}

export const styles = StyleSheet.create({
    overlay: {
        backgroundColor: '#fff',
        width: Dimensions.get('window').width,
    },
    overlayText: {
        fontFamily: font(),
        color: '#000',
        fontWeight: '300',
        fontSize: 18,
        padding: 5,
    },
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    kopFront: {
        width: boardWidth(),
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 126, 89, 0.75)',
        backfaceVisibility: 'hidden',
        borderRadius: 10,
    },
    kopBack: {
        width: boardWidth(),
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
        width: boardWidth(),
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 229, 119, 0.75)',
        backfaceVisibility: 'hidden',
        borderRadius: 10,
    },
    aanbodBack: {
        width: boardWidth(),
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
        width: boardWidth(),
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(78, 184, 11, 0.75)',
        backfaceVisibility: 'hidden',
        borderRadius: 10,
    },
    beschrijvingBack: {
        width: boardWidth(),
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
        fontFamily: font(),
        textAlign: 'center',
        fontSize: 18,
        color: '#000',
        fontWeight: '300',
    },
    toggleView: {
        paddingTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
    },
    toggleText: {
        paddingRight: 40,
        textAlign: 'center',
        fontFamily: font(),
    },
    divider: {
        paddingTop: 25,
        paddingBottom: 25,
    },
    spacing: {
        paddingTop: 5,
        paddingBottom: 5,
    },
    navigationHeader: {
        backgroundColor: '#9cc0e6',
        color: '#000',
    },
    hamburger: { width: 25, height: 25, marginLeft: 5 }
});