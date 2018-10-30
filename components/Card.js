import React, {Component} from "react";
import {Animated, Text, TouchableOpacity, View} from "react-native";
import {styles} from "../styles";
import * as PropTypes from "prop-types";

export class Card extends Component {
    render() {
        return <View>
            <FadeIntoView>
                {!this.props.showFront &&
                <TouchableOpacity underlayColor={"transparent"} style={this.props.styling}
                                  onPress={this.props.onPress}>
                    <Text style={styles.flipText}>{this.props.frontText}</Text>
                </TouchableOpacity>}
                {this.props.showFront &&
                <TouchableOpacity underlayColor={"transparent"} style={styles.back}
                                  onPress={this.props.onPress}>
                    <Text style={styles.flipText}>{this.props.backText}</Text>
                </TouchableOpacity>}
            </FadeIntoView>
        </View>;
    }
}

Card.propTypes = {
    showFront: PropTypes.bool,
    onPress: PropTypes.func,
    frontText: PropTypes.string,
    backText: PropTypes.any,
    styling: PropTypes.any
};

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