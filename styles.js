import {StyleSheet, Dimensions} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    kopCard: {
        width: Dimensions.get('window').width -10,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff7e59',
        backfaceVisibility: 'hidden',
        borderRadius: 10,
    },
    back: {
        width: Dimensions.get('window').width -10,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fdf6d8',
        backfaceVisibility: 'hidden',
        borderRadius: 10,
    },
    aanbodCard: {
        width: Dimensions.get('window').width -10,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffe577',
        backfaceVisibility: 'hidden',
        borderRadius: 10,
    },
    beschrijvingCard: {
        width: Dimensions.get('window').width -10,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4eb80b',
        backfaceVisibility: 'hidden',
        borderRadius: 10,
    },
    flipText: {
        width:  Dimensions.get('window').width -30,
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
    },
    spacing: {
        paddingTop: 5,
        paddingBottom: 5,
    }
});