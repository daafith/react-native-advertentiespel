import React from 'react';
import {View} from 'react-native';
import kopppen from './assets/kop';
import aanbod from './assets/aanbod';
import beschrijvingen from './assets/beschrijvingen';
import {Explanation} from "./components/Explanation";
import {QuestionMark} from "./components/QuestionMark";
import {GameBoard} from "./components/GameBoard";

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