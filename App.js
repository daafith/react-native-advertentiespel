import React, {Component} from 'react';
import {Switch, Text, View} from 'react-native';
import {styles} from "./styles";
import kopppen from './assets/kop';
import aanbod from './assets/aanbod';
import beschrijvingen from './assets/beschrijvingen';
import {Card} from "./components/Card";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showKop: false,
            showAanbod: false,
            showBeschrijving: false,
            displayOneAtATime: true,
            kop: this.randomElement(kopppen.kop),
            aanbod: this.randomElement(aanbod.aanbod),
            beschrijving: this.randomElement(beschrijvingen.beschrijving),
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Advertentiespel</Text>
                <View style={styles.toggleView}>
                    <Switch
                        onValueChange={this.allowAll}
                        value={this.state.displayOneAtATime}/>
                    <Text style={styles.toggleText}>Eén kaart tegelijk</Text>
                </View>
                <Divider/>
                <Card showBack={this.state.showKop} onPress={() => {
                    this.flip(0);
                    this.setKop();
                }} frontText={'Kop'} backText={this.state.kop} frontStyling={styles.kopFront}
                      backStyling={styles.kopBack}/>
                <Spacer/>
                <Card showBack={this.state.showAanbod} onPress={() => {
                    this.flip(1);
                    this.setAanbod();
                }} frontText={'Aanbod'} backText={this.state.aanbod} frontStyling={styles.aanbodFront}
                      backStyling={styles.aanbodBack}/>
                <Spacer/>
                <Card showBack={this.state.showBeschrijving} onPress={() => {
                    this.flip(2);
                    this.setBeschrijving();
                }} frontText={'Beschrijving'} backText={this.state.beschrijving} frontStyling={styles.beschrijvingFront}
                      backStyling={styles.beschrijvingBack}/>
            </View>
        );
    }

    allowAll = (value) => {
        this.setState({
            displayOneAtATime: value,
            showKop: false,
            showAanbod: false,
            showBeschrijving: false,
        })
    };

    flip = (index) => {
        this.state.displayOneAtATime ? this.flipOne(index) : this.flipAny(index);
    };

    flipAny = (index) => {
        if (index === 0) {
            this.setState({
                showKop: true
            })
        } else if (index === 1) {
            this.setState({
                showAanbod: true
            })
        } else {
            this.setState({
                showBeschrijving: true
            })
        }
    }

    flipOne = (index) => {
        if (index === 0) {
            this.setState({
                showKop: true,
                showAanbod: false,
                showBeschrijving: false,
            })
        } else if (index === 1) {
            this.setState({
                showAanbod: true,
                showKop: false,
                showBeschrijving: false,
            })
        } else {
            this.setState({
                showBeschrijving: true,
                showKop: false,
                showAanbod: false,
            })
        }
    }

    setKop = () => {
        this.setState({
            kop: this.randomElement(kopppen.kop)
        })
    };

    setAanbod = () => {
        this.setState({
            aanbod: this.randomElement(aanbod.aanbod),
        })
    };

    setBeschrijving = () => {
        this.setState({
            beschrijving: this.randomElement(beschrijvingen.beschrijving),
        })
    };

    randomElement(arr) {
        const x = Math.floor((Math.random() * arr.length));
        return arr[x];
    }
}

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