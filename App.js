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
            showFirst: false,
            showSecond: false,
            showThird: false,
            displayOneAtATime: true,
            kop: this.randomElement(kopppen.kop),
            aanbod: this.randomElement(aanbod.aanbod),
            beschrijving: this.randomElement(beschrijvingen.beschrijving),
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.toggleView}>
                    <Switch
                        onValueChange={this.allowAll}
                        value={this.state.displayOneAtATime}/>
                    <Text style={styles.toggleText}>Eén kaart tegelijk</Text>
                </View>
                <Spacer/>
                <Card showFront={this.state.showFirst} onPress={() => {
                    this.flip(0);
                    this.setKop();
                }} frontText={'Kop'} backText={this.state.kop} styling={styles.kopCard}/>
                <Spacer/>
                <Card showFront={this.state.showSecond} onPress={() => {
                    this.flip(1);
                    this.setAanbod();
                }} frontText={'Aanbod'} backText={this.state.aanbod} styling={styles.aanbodCard}/>
                <Spacer/>
                <Card showFront={this.state.showThird} onPress={() => {
                    this.flip(2);
                    this.setBeschrijving();
                }} frontText={'Beschrijving'} backText={this.state.beschrijving} styling={styles.beschrijvingCard}/>
            </View>
        );
    }

    allowAll = (value) => {
        this.setState({
            displayOneAtATime: value,
            showFirst: false,
            showSecond: false,
            showThird: false,
        })
    };

    flip(index) {
        if (this.state.displayOneAtATime) {
            this.displayOne(index);
        } else {
            this.displayAny(index);
        }
    };

    displayAny(index) {
        if (index === 0) {
            this.setState({
                showFirst: !this.state.showFirst
            })
        } else if (index === 1) {
            this.setState({
                showSecond: !this.state.showSecond
            })
        } else {
            this.setState({
                showThird: !this.state.showThird
            })
        }
    }

    displayOne(index) {
        if (index === 0) {
            this.setState({
                showFirst: !this.state.showFirst,
                showSecond: false,
                showThird: false,
            })
        } else if (index === 1) {
            this.setState({
                showSecond: !this.state.showSecond,
                showFirst: false,
                showThird: false,
            })
        } else {
            this.setState({
                showThird: !this.state.showThird,
                showFirst: false,
                showSecond: false,
            })
        }
    }

    setKop = () => {
        this.setState({
            kop: this.randomElement(kopppen.kop),
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

class Spacer extends Component {
    render() {
        return (<View style={styles.spacing}></View>);
    }
}

