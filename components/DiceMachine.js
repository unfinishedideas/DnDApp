import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

// functions
import diceRoller from '../functions/diceRoller';

// components
import DiceResultDisplay from './DiceResultDisplay';

const DiceMachine = (props) => {

    const [resultsBack, setResultsBack] = useState({total: '', results: [], string: 'waiting for input'})
    const [numOfDice, setNumOfDice] = useState(props.numOfDice)
    const [numOfSides, setNumOfSides] = useState(props.numOfSides)
    const [modifier, setModifier] = useState(props.modifier)


    const rollDice = (numDice, numSides, mod) => {
        const resultObj = diceRoller(numDice, numSides, mod);
        setResultsBack(resultObj);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>DICE MACHINE</Text>
            
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
           
            <Text style={styles.heading}>Modifier</Text>
           
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

            <Text style={styles.heading}>Results</Text>
            <DiceResultDisplay input={resultsBack}/>

            <TouchableOpacity style={styles.rollButton} onPress={() => {rollDice(numOfDice,numOfSides,modifier)}}>
                <Text>Roll</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DiceMachine;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(100,100,100)',
        padding: 50,
        borderRadius: 40
    },
    title: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: 'bold'
    }, 
    heading: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    inputBox: {
        flexDirection:'row', 
        flexWrap:'wrap',
        alignSelf: 'center',
        backgroundColor: 'rgb(200,200,200)',
        fontSize: 20,
        padding: 20,
        margin: 10,
        textAlignVertical: 'bottom'
    },
    numInput: {
        textAlignVertical: 'bottom',
        borderBottomWidth: 1,
        borderColor: 'black',
        borderStyle: 'solid',
        textAlign: 'center'
    },
    rollButton: {
        alignSelf: 'center',
        marginTop: 20,
        borderColor: 'rgb(20,20,20)',
        borderWidth: 10,
        padding: 15,
        borderStyle: 'solid',
        backgroundColor: 'rgb(200,200,200)',
    }
})