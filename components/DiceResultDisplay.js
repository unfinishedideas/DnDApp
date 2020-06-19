import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const DiceResultDisplay = (props) => {
    return(
        <View style={styles.container}>
            <Text>Rolling: {props.resultsBack.string}</Text>
            <Text>Total: {props.resultsBack.total}</Text>
            <Text>{props.resultsBack.results}</Text>
        </View>
    )
}

export default DiceResultDisplay;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(200,200,200)',
        // height: 50
    }
})