import {StyleSheet, Dimensions, Platform} from "react-native";

function font() {
    return Platform.OS === 'ios' ? 'System' : 'Roboto';
}

function boardWidth() {
    return Dimensions.get('window').width - 10;
}

function screentTop() {
    return 40;
}

export const styles = StyleSheet.create({
    questionView: {
        paddingTop: screentTop(),
        paddingRight: 10,
        alignItems: 'flex-end',
    },
    questionText: {
        fontFamily: font(),
        textAlign: 'center',
        color: '#000',
        fontWeight: '500',
        fontSize: 18,
        width: 24,
        height: 24,
        borderRadius: 24/2,
        borderColor: '#c58884',
        borderWidth: 1,
    },
    overlay: {
        backgroundColor: '#f5f5f5',
        paddingTop: screentTop(),
        width: Dimensions.get('window').width,
    },
    overlayText: {
        fontFamily: font(),
        color: '#000',
        fontWeight: '300',
        fontSize: 18,
        padding: 5,
    },
    backToGame: {
        height: 48,
        width: 88,
        lineHeight: 44,
        margin: 5,
        paddingLeft: 5,
        paddingRight: 5,
        textAlign: 'center',
        fontFamily: font(),
        borderWidth: 2,
        borderColor: '#45890b',
        fontSize: 18,
        fontWeight: '400',
        color:'#000',
        backgroundColor: '#45890b',
        ...Platform.select({
            android: {
                borderRadius: 50,
            },
            ios: {
                borderRadius: 25,
                overflow: 'hidden',
            },
        }),
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
    header: {
        paddingBottom: 30,
        fontFamily: font(),
        textAlign: 'center',
        fontSize: 24,
        color: '#441d1d',
        fontWeight: '300',
        opacity: 0.30,
        transform: [
            { perspective: 300 },
            { rotateY: '30deg'},
            { skewY: '-10deg'},
        ]
    }
});