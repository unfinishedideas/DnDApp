import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const DiceResultDisplay = (props) => {

    const string = props.input.string;
    const total = props.input.total
    const results = props.input.results;

    return(
        <View style={styles.container}>
            {
                !string || string === 'Invalid input'  ?   <Text>Invalid input</Text> 
                :
                string === 'waiting for input'         ?   <Text>Waiting for Input</Text>
                :
                <View>
                    <Text>Rolling: {string}</Text>
                    <Text>Results: {results.toString()}</Text>
                
                    <Text>Total: {total}</Text>
                </View>
            }
        </View>
    )
}

export default DiceResultDisplay;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(200,200,200)',
        padding: 16
    }
})