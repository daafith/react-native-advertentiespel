import React, {Component} from "react";
import {Switch, Text, View} from "react-native";
import {styles} from "../styles";
import * as PropTypes from "prop-types";

export class Toggle extends Component {
    render() {
        return <View style={styles.toggleView}>
            <Switch
                onValueChange={this.props.onValueChange}
                value={this.props.enabled}/>
            {this.props.enabled &&
            <Text style={styles.toggleText}>Eén kaart per beurt</Text>
            }
            {!this.props.enabled &&
            <Text style={styles.toggleText}>Meerdere kaarten per beurt</Text>
            }
        </View>;
    }
}

Toggle.propTypes = {
    onValueChange: PropTypes.func,
    enabled: PropTypes.bool
};