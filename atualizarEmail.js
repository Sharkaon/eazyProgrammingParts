import React from 'react';
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert
} from 'react-native';

import firebase from 'react-native-firebase';
import auth from "@react-native-firebase/auth";

export default function Login( { navigation } ) {

    state={
        email: ''
    }

    update = async() => {
        const email = this.state;

        try{
            const user = await firebase.auth().updateEmail(email);
            navigation.navigate("conta");
        }catch(err){
            console.log(err);
        }
    }

    return(
        <View style={{ flex: 1, backgroundColor: '#1c2b31' }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 50, color: '#fff', marginTop: 2 }}>Alterar E-mail</Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'center', margin: 10, alignItems: 'center' }}>
                <TextInput
                    style={{ fontSize: 20, backgroundColor: '#fff', width: 300 }}
                    placeholder="Insira seu novo e-mail"
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                />
            </View>

            <TouchableOpacity
                style={styles.botaoLogin}
                onPress={this.update}>
                <Text style={{ color: '#fff', fontSize: 30 }}>Atualizar</Text>
            </TouchableOpacity>
        </View>  

    );
}