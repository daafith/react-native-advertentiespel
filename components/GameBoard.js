import React, {Component} from "react";
import {View} from "react-native";
import {styles} from "../styles";
import {Card} from "./Card";
import * as PropTypes from "prop-types";
import {Toggle} from "./Toggle";

export class GameBoard extends Component {
    render() {
        return <View style={styles.container}>
            <Toggle onValueChange={this.props.onValueChange} enabled={this.props.enabled}/>
            <View style={styles.divider}/>
            <Card showBack={this.props.showBackKop} onPress={this.props.onPressKop} frontText={"Kop"}
                  backText={this.props.backTextKop} frontStyling={styles.kopFront}
                  backStyling={styles.kopBack}/>
            <View style={styles.spacing}/>
            <Card showBack={this.props.showBackAanbod} onPress={this.props.onPressAanbod} frontText={"Aanbod"}
                  backText={this.props.backTextAanbod} frontStyling={styles.aanbodFront}
                  backStyling={styles.aanbodBack}/>
            <View style={styles.spacing}/>
            <Card showBack={this.props.showBackBeschrijving} onPress={this.props.onPressBeschrijving}
                  frontText={"Beschrijving"}
                  backText={this.props.backTextBeschrijving}
                  frontStyling={styles.beschrijvingFront}
                  backStyling={styles.beschrijvingBack}/>
        </View>;
    }
}

GameBoard.propTypes = {
    onValueChange: PropTypes.func,
    enabled: PropTypes.bool,
    showBackKop: PropTypes.bool,
    onPressKop: PropTypes.func,
    backTextKop: PropTypes.any,
    showBackAanbod: PropTypes.bool,
    onPressAanbod: PropTypes.func,
    backTextAanbod: PropTypes.any,
    showBackBeschrijving: PropTypes.bool,
    onPressBeschrijving: PropTypes.func,
    backTextBeschrijving: PropTypes.any
};