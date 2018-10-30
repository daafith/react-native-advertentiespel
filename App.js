import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Animated, Switch} from 'react-native';
import {styles} from "./styles";
import kopppen from './assets/kop';
import aanbod from './assets/aanbod';
import beschrijvingen from './assets/beschrijvingen';

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

    render() {
        let kop = 'Kop';
        let aanbod = 'Aanbod';
        let beschrijving = 'Beschrijving';
        return (
            <View style={styles.container}>
                <View style={styles.toggleView}>
                    <Switch
                        onValueChange={this.allowAll}
                        value={this.state.displayOneAtATime}/>
                    <Text style={styles.toggleText}>Eén kaart tegelijk</Text>
                </View>
                <Spacer/>
                <View>
                    <FadeIntoView>
                        {!this.state.showFirst &&
                        <TouchableOpacity underlayColor={"transparent"} style={styles.kopCard}
                                          onPress={() => { this.flip(0); this.setKop(); }}>
                            <Text style={styles.flipText}>{kop}</Text>
                        </TouchableOpacity>}
                        {this.state.showFirst &&
                        <TouchableOpacity underlayColor={"transparent"} style={styles.back}
                                          onPress={() => { this.flip(0); this.setKop(); }}>
                            <Text style={styles.flipText}>{this.state.kop}</Text>
                        </TouchableOpacity>}
                    </FadeIntoView>
                </View>
                <Spacer/>
                <View>
                    <FadeIntoView>
                        {!this.state.showSecond &&
                        <TouchableOpacity underlayColor={"transparent"} style={styles.aanbodCard}
                                          onPress={() => { this.flip(1); this.setAanbod(); }}>
                            <Text style={styles.flipText}>{aanbod}</Text>
                        </TouchableOpacity>}
                        {this.state.showSecond &&
                        <TouchableOpacity underlayColor={"transparent"} style={styles.back}
                                          onPress={() => { this.flip(1); this.setAanbod(); }}>
                            <Text style={styles.flipText}>{this.state.aanbod}</Text>
                        </TouchableOpacity>}
                    </FadeIntoView>
                </View>
                <Spacer/>
                <View>
                    <FadeIntoView>
                        {!this.state.showThird &&
                        <TouchableOpacity underlayColor={"transparent"} style={styles.beschrijvingCard}
                                          onPress={() => { this.flip(2); this.setBeschrijving(); }}>
                            <Text style={styles.flipText}>{beschrijving}</Text>
                        </TouchableOpacity>}
                        {this.state.showThird &&
                        <TouchableOpacity underlayColor={"transparent"} style={styles.back}
                                          onPress={() => { this.flip(2); this.setBeschrijving(); }}>
                            <Text style={styles.flipText}>{this.state.beschrijving}</Text>
                        </TouchableOpacity>}
                    </FadeIntoView>
                </View>
            </View>
        );
    }
}

class Spacer extends Component {
    render() {
        return (<View style={styles.spacing}></View>);
    }
}

class FadeIntoView extends React.Component {
    state = {
        fadeAnim: new Animated.Value(0),
    }

    componentDidMount() {
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 1,
                duration: 700,
            }
        ).start();
    }

    render() {
        let {fadeAnim} = this.state;

        return (
            <Animated.View
                style={{
                    ...this.props.style,
                    opacity: fadeAnim,
                }}
            >
                {this.props.children}
            </Animated.View>
        );
    }
}

