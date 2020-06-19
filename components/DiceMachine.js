import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

// functions
import diceRoller from '../functions/diceRoller';

// components
import DiceResultDisplay from './DiceResultDisplay';

const DiceMachine = () => {

    const [resultsBack, setResultsBack] = useState({total: '', results: [], string: 'waiting for input'})
    const [numOfDice, setNumOfDice] = useState(null)
    const [numOfSides, setNumOfSides] = useState(null)


    const rollDice = (numDice, numSides, modifiers) => {
        const resultObj = diceRoller(numDice, numSides, modifiers);
        setResultsBack(resultObj);
    }

    const getNumOfDice = (num) => {setNumOfDice(num)}
    const getNumOfSides = (num) => {setNumOfSides(num)}

    return(
        <View>
            <Text>DICE MACHINE</Text>
            
            <View style={styles.inputBox}>
                <TextInput style={[{textAlign: 'right'}, styles.numInput]}                    
                    onChangeText={(text) => setNumOfDice(parseInt(text))}
                    value={numOfDice}
                />
                    <Text style={{textAlignVertical: 'bottom'}}> d </Text>
                <TextInput 
                    style={styles.numInput} 
                    onChangeText={(text) => setNumOfSides(parseInt(text))}
                    value={numOfSides}
                />
            </View>

            <TouchableOpacity style={styles.rollButton} onPress={() => {rollDice(numOfDice,numOfSides,0)}}>
                <Text>Roll</Text>
            </TouchableOpacity>

            <DiceResultDisplay resultsBack={resultsBack}/>
        </View>
    )
}

export default DiceMachine;

const styles = StyleSheet.create({
    inputBox: {
        flexDirection:'row', 
        flexWrap:'wrap',
        alignSelf: 'center',
        backgroundColor: 'rgb(200,200,200)',
        fontSize: 20,
        padding: 20,
        textAlignVertical: 'bottom'
    },
    numInput: {
        textAlignVertical: 'bottom'    
    },
    rollButton: {
        alignSelf: 'center',
        marginTop: 20
    }
})