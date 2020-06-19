import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const DiceResultDisplay = (props) => {
    
    // const [display, setDisplay] = useState(null)


    const string = props.input.string;
    const total = props.input.total
    const results = props.input.results;

    // const concatResults = () => {
    //     if (results.length > 0) {
    //         let display = results.toString()
    //         // let display = results.map((result, key)=> <Text key={key}>{ result }</Text>)
    //         setDisplay(display);
    //     }
    // }

    // useEffect(() => {
    //     concatResults;
    // }, [])

    return(
        <View style={styles.container}>
            {
                string === 'Invalid input' 
                ?
                    <Text>Invalid input</Text>
                :
                <View>
                    <Text>Rolling: {string}</Text>
                    <Text>{results.toString()}</Text>
                
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
        // height: 50
    }
})