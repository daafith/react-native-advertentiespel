import React, {Component} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {styles} from "../styles";
import * as PropTypes from "prop-types";

export class Explanation extends Component {
    render() {
        return (
            <View style={styles.overlay}>
                    <Text style={styles.overlayText}>
                        <Text style={{fontWeight: "bold"}}>Uitleg</Text>{"\n"}
                        Het advertentiespel bevat drie soorten kaarten: de kop, het aanbod en de
                        beschrijving.{"\n"}{"\n"}
                        Om de beurt draaien de spelers een kaart om en lezen hardop wat er op staat.
                        Eerst een kopkaart, dan het aanbod en tenslotte een beschrijving.
                        Het doel van het spel is gezelligheid en plezier.{"\n"}{"\n"}
                        <Text style={{fontWeight: "bold"}}>Opties</Text>{"\n"}
                        Deze app geeft (per speler) de mogelijkheid één of meerdere kaarten tegelijk per beurt te trekken.
                        Wil je een andere tekst? Druk dan opnieuw op de betreffende kaart.{"\n"}
                    </Text>
                <TouchableOpacity underlayColor={"transparent"} onPress={this.props.onPress}>
                    <Text style={styles.backToGame}>Terug</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

Explanation.propTypes = {onPress: PropTypes.func};