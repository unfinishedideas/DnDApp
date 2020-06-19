import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

// functions
import diceRoller from '../functions/diceRoller';

// components
import DiceResultDisplay from './DiceResultDisplay';

const DiceMachine = () => {

    const [resultsBack, setResultsBack] = useState({total: '', results: [], string: 'waiting for input'})
    const [numOfDice, setNumOfDice] = useState(2)
    const [numOfSides, setNumOfSides] = useState(4)
    const [modifier, setModifier] = useState(0)


    const rollDice = (numDice, numSides, mod) => {
        const resultObj = diceRoller(numDice, numSides, mod);
        setResultsBack(resultObj);
    }

    return(
        <View>
            <Text>DICE MACHINE</Text>
            
            <View style={styles.inputBox}>
                <TextInput 
                    style={[{textAlign: 'right'}, styles.numInput]}                    
                    keyboardType={'numeric'}
                    placeholder={'2'}
                    onChangeText={(text) => 
                        {
                            if(text){
                                setNumOfDice(parseInt(text))
                            } else {
                                setNumOfDice(0)
                            }
                        }}
                    value={String(numOfDice)}
                />
                
                <Text style={{textAlignVertical: 'bottom'}}> d </Text>
                
                <TextInput 
                    style={styles.numInput}
                    keyboardType={'numeric'}
                    placeholder={'4'}
                    onChangeText={(text) => 
                        {
                            if(text){
                                setNumOfSides(parseInt(text))
                            } else {
                                setNumOfSides(0)
                            }
                        }}
                    value={String(numOfSides)}
                />
            </View>
           
            <Text>Modifier</Text>
           
            <View style={styles.inputBox}>
                <TextInput
                    style={styles.numInput} 
                    keyboardType={'numeric'}
                    placeholder={'3'}
                    onChangeText={(text) => {
                        if(text){
                            setModifier(parseInt(text))
                        } else {
                            setModifier(0)
                        }
                    }}
                    value={String(modifier)}
                />
            </View>

            <TouchableOpacity style={styles.rollButton} onPress={() => {rollDice(numOfDice,numOfSides,modifier)}}>
                <Text>Roll</Text>
            </TouchableOpacity>

            <DiceResultDisplay input={resultsBack}/>
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