import React, {Component} from "react";
import {Text, View} from "react-native";
import {styles} from "../styles";

export default class Explanation extends Component {
    render() {
        return (
            <View style={styles.overlay}>
                    <Text style={styles.overlayText}>
                        <Text style={{fontWeight: "bold"}}>Spelregels</Text>{"\n"}
                        Het advertentiespel bevat drie soorten kaarten: de kop, het aanbod en de
                        beschrijving.{"\n"}{"\n"}
                        Om de beurt draaien de spelers een kaart om en lezen hardop wat er op staat.
                        Eerst een kopkaart, dan het aanbod en tenslotte een beschrijving.
                        Het doel van het spel is gezelligheid en plezier.{"\n"}{"\n"}
                        <Text style={{fontWeight: "bold"}}>Opties</Text>{"\n"}
                        Deze app geeft (per speler) de mogelijkheid één of meerdere kaarten tegelijk per beurt te trekken.
                        Wil je een andere tekst? Druk dan opnieuw op de betreffende kaart.{"\n"}
                    </Text>
            </View>
        );
    }
}