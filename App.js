import React, {Component} from 'react';
import {Switch, Text, TouchableOpacity, View} from 'react-native';
import {styles} from "./styles";
import kopppen from './assets/kop';
import aanbod from './assets/aanbod';
import beschrijvingen from './assets/beschrijvingen';
import {Card} from "./components/Card";
import * as PropTypes from "prop-types";

class Explanation extends Component {
    render() {
        return (
            <View style={styles.overlay}>
            <TouchableOpacity underlayColor={"transparent"} onPress={this.props.onPress}>
                <Text style={styles.overlayText}>
                    <Text style={{fontWeight: "bold"}}>Uitleg</Text>{"\n"}
                    Het advertentiespek bevat drie soorten kaarten: de kop, het aanbod en de beschrijving.{"\n"}{"\n"}
                    Om beurt draaien de spelers een kaart om en lezen hardop wat er op staat.
                    Eerst een kopkaart, dan een aanbieding en tenslotte een beschrijving.
                    Het doel van het spel is gezelligheid en plezier.{"\n"}{"\n"}
                    <Text style={{fontWeight: "bold"}}>Opties</Text>{"\n"}
                    Deze app geeft (per speler) de mogelijkheid één of meerdere kaarten tegelijk te trekken.
                    Wil je een andere tekst? Druk dan opnieuw op de betreffende kaart.
                </Text>
            </TouchableOpacity>
        </View>
        );
    }
}

Explanation.propTypes = {onPress: PropTypes.func};

class QuestionMark extends Component {
    render() {
        return <View style={styles.questionView}>
            <TouchableOpacity underlayColor={"transparent"} onPress={this.props.onPress}>
                <Text style={styles.questionText}>?</Text>
            </TouchableOpacity>
        </View>;
    }
}

QuestionMark.propTypes = {onPress: PropTypes.func};

class GameBoard extends Component {
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
            <Card showBack={this.props.showBackBeschrijving} onPress={this.props.onPressBeschrijving} frontText={"Beschrijving"}
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

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showKop: false,
            showAanbod: false,
            showBeschrijving: false,
            lastFlipped: -1,
            displayOneAtATime: true,
            kop: this.randomElement(kopppen.kop),
            aanbod: this.randomElement(aanbod.aanbod),
            beschrijving: this.randomElement(beschrijvingen.beschrijving),
            showExplanation: false,
        };
    }

    componentDidUpdate(oldProps, oldState) {
        if (this.isKop(this.state.lastFlipped) && oldState.kop === this.state.kop) {
            this.setKop();
        } else if (this.isAanbod(this.state.lastFlipped) && oldState.aanbod === this.state.aanbod) {
            this.setAanbod();
        } else if (this.isBeschrijving(this.state.lastFlipped) && oldState.beschrijving === this.state.beschrijving) {
            this.setBeschrijving();
        }
    }

    render() {
        return (
            <View>
                {!this.state.showExplanation && <QuestionMark onPress={() => this.showExplanation()}/>}
                <View>
                    {this.state.showExplanation && <Explanation onPress={() => this.showExplanation()}/>
                    }
                    {!this.state.showExplanation && <GameBoard onValueChange={this.allowAll}
                                                               value={this.state.displayOneAtATime}
                                                               showBackKop={this.state.showKop} onPressKop={() => {
                        this.flip(0);
                        this.setKop();
                    }} backTextKop={this.state.kop} showBackAanbod={this.state.showAanbod} onPressAanbod={() => {
                        this.flip(1);
                        this.setAanbod();
                    }} backTextAanbod={this.state.aanbod} showBackBeschrijving={this.state.showBeschrijving} onPressBeschrijving={() => {
                        this.flip(2);
                        this.setBeschrijving();
                    }} backTextBeschrijving={this.state.beschrijving}/>}
                </View>
            </View>
        );
    }

    showExplanation = () => {
        this.setState({
            showExplanation: !this.state.showExplanation
        })
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
        this.setState({
            lastFlipped: index
        })
    };

    flipAny = (index) => {
        if (this.isKop(index)) {
            this.setState({
                showKop: true
            })
        } else if (this.isAanbod(index)) {
            this.setState({
                showAanbod: true
            })
        } else {
            this.setState({
                showBeschrijving: true
            })
        }
    }

    isKop(index) {
        return index === 0;
    }

    isAanbod(index) {
        return index === 1;
    }

    isBeschrijving(index) {
        return index === 2;
    }

    flipOne = (index) => {
        if (this.isKop(index)) {
            this.setState({
                showKop: true,
                showAanbod: false,
                showBeschrijving: false,
            })
        } else if (this.isAanbod(index)) {
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