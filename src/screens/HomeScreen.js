import {View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <Image source={require('../assets/R.jpeg')} style={styles.logo}/>
                </View>
                <View style={styles.body}>
                    <View style={styles.bodyContent}>
                        <Text style={styles.name}>
                            Welcome
                        </Text>
                        <Text style={styles.info}>
                            This is a simple app to help you learn React Native.
                        </Text>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Details')}>
                            <Text style={styles.buttonText}>Learn More</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    header: {
        backgroundColor: '#00BFFF',
        height: 200,
    },
    logo: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginTop: 50,
    },
    body: {
        marginTop: 40,
        marginBottom: 40,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 20,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
    },
    name: {
        fontSize: 28,
        color: '#00BFFF',
        fontWeight: 'bold',
    },
    info: {
        fontSize: 16,
        color: '#00BFFF',
        marginTop: 10,
    },
    button: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: '#00BFFF',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    }
});
