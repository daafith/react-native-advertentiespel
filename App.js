import React from 'react';
import {Text, View, TouchableOpacity, Animated, Switch} from 'react-native';
import {styles} from "./styles";


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showFirst: false,
            showSecond: false,
            showThird: false,
            displayOne: true
        };
    }

    allowAll = (value) => {
        this.setState({
            displayOne: value,
            showFirst: false,
            showSecond: false,
            showThird: false,
        })
    }

    flip(index) {
        if(index===0 && (!this.state.displayOne || (!this.state.showSecond && !this.state.showThird))){
            this.setState({
                showFirst: !this.state.showFirst
            })
        } else if(index===1 && (!this.state.displayOne || (!this.state.showFirst && !this.state.showThird))){
            this.setState({
                showSecond: !this.state.showSecond
            })
        } else if(index===2 && (!this.state.displayOne || (!this.state.showFirst && !this.state.showSecond))){
            this.setState({
                showThird: !this.state.showThird
            })
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.nestedButtonView}>
                <Switch
                    onValueChange = {this.allowAll}
                    value = {this.state.displayOne}/>
                <Text style={styles.buttonText}>Een kaart tegelijk</Text>
                </View>
                <View style={styles.spacing}>
                </View>
                <View>

                    <FadeIntoView>
                        {!this.state.showFirst &&
                        <TouchableOpacity underlayColor={"transparent"} style={styles.kopCard} onPress={()=>this.flip(0)}>
                            <Text style={styles.flipText}>Kop</Text>
                        </TouchableOpacity>}
                        {this.state.showFirst &&
                            <TouchableOpacity underlayColor={"transparent"} style={styles.kopBack} onPress={()=>this.flip(0)}>
                            <Text style={styles.flipText}>Weggelopen:</Text>
                        </TouchableOpacity>}
                    </FadeIntoView>
                </View>
                <View style={styles.spacing}>
                </View>
                <View>
                    <FadeIntoView>
                        {!this.state.showSecond &&
                        <TouchableOpacity underlayColor={"transparent"} style={styles.aanbodCard} onPress={()=>this.flip(1)}>
                            <Text style={styles.flipText}>Aanbod</Text>
                        </TouchableOpacity>}
                        {this.state.showSecond &&
                        <TouchableOpacity underlayColor={"transparent"} style={styles.kopBack} onPress={()=>this.flip(1)}>
                            <Text style={styles.flipText}>een gemeubileerde zitkamer</Text>
                        </TouchableOpacity>}
                    </FadeIntoView>
                </View>
                <View style={styles.spacing}>
                </View>
                <View>
                    <FadeIntoView>
                        {!this.state.showThird &&
                        <TouchableOpacity underlayColor={"transparent"} style={styles.beschrijvingCard} onPress={()=>this.flip(2)}>
                            <Text style={styles.flipText}>Beschrijving</Text>
                        </TouchableOpacity>}
                        {this.state.showThird &&
                        <TouchableOpacity underlayColor={"transparent"} style={styles.kopBack} onPress={()=>this.flip(2)}>
                            <Text style={styles.flipText}>in rolletjes van 20 stuks</Text>
                        </TouchableOpacity>}
                    </FadeIntoView>
                </View>
            </View>
        );
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

