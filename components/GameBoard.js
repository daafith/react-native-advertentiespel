import React, {Component} from "react";
import {Switch, Text, View} from "react-native";
import {styles} from "../styles";
import {Card} from "./Card";
import * as PropTypes from "prop-types";

export class GameBoard extends Component {
    render() {
        return <View style={styles.container}>
            <Text style={styles.header}>Advertentiespel</Text>
            <View style={styles.toggleView}>
                <Switch
                    onValueChange={this.props.onValueChange}
                    value={this.props.value}/>
                <Text style={styles.toggleText}>Eén kaart tegelijk</Text>
            </View>
            <Divider/>
            <Card showBack={this.props.showBackKop} onPress={this.props.onPressKop} frontText={"Kop"}
                  backText={this.props.backTextKop} frontStyling={styles.kopFront}
                  backStyling={styles.kopBack}/>
            <Spacer/>
            <Card showBack={this.props.showBackAanbod} onPress={this.props.onPressAanbod} frontText={"Aanbod"}
                  backText={this.props.backTextAanbod} frontStyling={styles.aanbodFront}
                  backStyling={styles.aanbodBack}/>
            <Spacer/>
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
    value: PropTypes.bool,
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

class Divider extends Component {
    render() {
        return (<View style={styles.divider}></View>);
    }
}

class Spacer extends Component {
    render() {
        return (<View style={styles.spacing}></View>);
    }
}