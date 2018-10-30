import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Animated, Switch} from 'react-native';
import {styles} from "./styles";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showFirst: false,
            showSecond: false,
            showThird: false,
            displayOneAtATime: true
        };
    }

    allowAll = (value) => {
        this.setState({
            displayOneAtATime: value,
            showFirst: false,
            showSecond: false,
            showThird: false,
        })
    }

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
        } else if (index === 2) {
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
        } else if (index === 2) {
            this.setState({
                showThird: !this.state.showThird,
                showFirst: false,
                showSecond: false,
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.nestedButtonView}>
                    <Switch
                        onValueChange={this.allowAll}
                        value={this.state.displayOneAtATime}/>
                    <Text style={styles.buttonText}>Eén kaart tegelijk</Text>
                </View>
                <Spacer/>
                <View>

                    <FadeIntoView>
                        {!this.state.showFirst &&
                        <TouchableOpacity underlayColor={"transparent"} style={styles.kopCard}
                                          onPress={() => this.flip(0)}>
                            <Text style={styles.flipText}>Kop</Text>
                        </TouchableOpacity>}
                        {this.state.showFirst &&
                        <TouchableOpacity underlayColor={"transparent"} style={styles.kopBack}
                                          onPress={() => this.flip(0)}>
                            <Text style={styles.flipText}>Weggelopen:</Text>
                        </TouchableOpacity>}
                    </FadeIntoView>
                </View>
                <Spacer/>
                <View>
                    <FadeIntoView>
                        {!this.state.showSecond &&
                        <TouchableOpacity underlayColor={"transparent"} style={styles.aanbodCard}
                                          onPress={() => this.flip(1)}>
                            <Text style={styles.flipText}>Aanbod</Text>
                        </TouchableOpacity>}
                        {this.state.showSecond &&
                        <TouchableOpacity underlayColor={"transparent"} style={styles.kopBack}
                                          onPress={() => this.flip(1)}>
                            <Text style={styles.flipText}>een gemeubileerde zitkamer</Text>
                        </TouchableOpacity>}
                    </FadeIntoView>
                </View>
                <Spacer/>
                <View>
                    <FadeIntoView>
                        {!this.state.showThird &&
                        <TouchableOpacity underlayColor={"transparent"} style={styles.beschrijvingCard}
                                          onPress={() => this.flip(2)}>
                            <Text style={styles.flipText}>Beschrijving</Text>
                        </TouchableOpacity>}
                        {this.state.showThird &&
                        <TouchableOpacity underlayColor={"transparent"} style={styles.kopBack}
                                          onPress={() => this.flip(2)}>
                            <Text style={styles.flipText}>in rolletjes van 20 stuks</Text>
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

