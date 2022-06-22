import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import React,{useState} from 'react';

const LoginScreen = ({navigation}) => {
 
    const [message, setMessage] = useState('');
    const [result, setResult] = useState('');

    const sendMessage = () => {
        //send sms 




    return (
        <View style={styles.container}>
            
            <Text style={styles.result}>{result}</Text>
            <TextInput style={styles.input} placeholder="Enter your message" onChangeText={(text) => setMessage(text)} />
            <TouchableOpacity style={styles.button} onPress={() => setResult(message)}>
                <Text style={styles.buttonText}>Send</Text>
            </TouchableOpacity>
        </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});
