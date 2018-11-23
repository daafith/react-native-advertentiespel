import React, {Component} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {styles} from "../styles";
import * as PropTypes from "prop-types";

export class QuestionMark extends Component {
    render() {
        return <View>
            <TouchableOpacity style={styles.questionView} underlayColor={"transparent"} onPress={this.props.onPress}>
                <Text style={styles.questionText}>?</Text>
            </TouchableOpacity>
        </View>;
    }
}

QuestionMark.propTypes = {onPress: PropTypes.func};