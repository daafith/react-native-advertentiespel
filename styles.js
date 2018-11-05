import {StyleSheet, Dimensions, Platform, StatusBar} from "react-native";

function getFont() {
    return Platform.OS === 'ios' ? 'American Typewriter' : 'Roboto';
}

function getWidth() {
    return Dimensions.get('window').width - 10;
}

export const styles = StyleSheet.create({
    questionView: {
        paddingTop: StatusBar.currentHeight + 5,
        paddingRight: 10,
        alignItems: 'flex-end',
    },
    questionText: {
        fontFamily: getFont(),
        textAlign: 'center',
        color: '#000',
        fontWeight: '300',
        fontSize: 18,
        width: 24,
        height: 24,
        borderRadius: 24/2,
        backgroundColor: 'rgba(68, 29, 29, 0.25)',
    },
    overlay: {
        // position: 'absolute',
        // flex: 1,
        // top: 0,
        // bottom: 0,
        // opacity: 0.8,
        backgroundColor: '#f5f5f5',
        // height: 700,
        paddingTop: StatusBar.currentHeight + 5,
        width: getWidth(),
        // right: 5,
        // left: 5,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    overlayText: {
        fontFamily: getFont(),
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
        width: getWidth(),
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 126, 89, 0.75)',
        backfaceVisibility: 'hidden',
        borderRadius: 10,
    },
    kopBack: {
        width: getWidth(),
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
        width: getWidth(),
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 229, 119, 0.75)',
        backfaceVisibility: 'hidden',
        borderRadius: 10,
    },
    aanbodBack: {
        width: getWidth(),
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
        width: getWidth(),
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(78, 184, 11, 0.75)',
        backfaceVisibility: 'hidden',
        borderRadius: 10,
    },
    beschrijvingBack: {
        width: getWidth(),
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
    divider: {
        paddingTop: 25,
        paddingBottom: 25,
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
        color: '#441d1d',
        fontWeight: '300',
        opacity: 0.25,
        transform: [
            { perspective: 300 },
            { rotateY: '30deg'},
            { skewY: '-10deg'},
        ]
    }
});