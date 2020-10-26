import React from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert
} from 'react-native';

import auth from '@react-native-firebase/auth';

export default function Cadastro({ navigation }) {

    state = {
        email: '',
        password: '',
        error: false,
    }

    cadastro = async () => {
        const { email, password } = this.state;

        try {
            const user = await auth().createUserWithEmailAndPassword(email, password);
            navigateToMenu();
        }
        catch (err) {
            console.log(err);
            this.setState({ error: true });
        }
    }

    function navigateToMenu() {
        navigation.navigate('Menu');
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#1c2b31' }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{ height: 70, width: 70 }} source={require('../../Images/logo.jpg')} />
                <Image style={{ height: 50, width: 125 }} source={require('../../Images/textoLogo.jpg')} />
                <Text style={{ fontSize: 50, color: '#fff', marginTop: 2 }}>Conecte-se</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', margin: 10, alignItems: 'center' }}>
                <TextInput
                    style={{ fontSize: 20, backgroundColor: '#fff', width: 300 }}
                    placeholder="Insira seu e-mail"
                    value={this.state.email}
                    onChangeText={email=> this.setState({email})}
                />
                <TextInput
                    style={{ fontSize: 20, backgroundColor: '#fff', width: 300, marginTop: 20 }}
                    placeholder="Insira sua senha"
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                />

                <TouchableOpacity
                    style={styles.botaoLogin}
                    onPress={this.cadastro}>
                    <Text style={{ color: '#fff', fontSize: 30 }}>Cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        //Alert.alert('Clicou em cadastrar');
                        navigation.navigate("Login");
                    }}>
                    <Text style={{ color: '#fff', fontSize: 15, marginTop: 8 }}>Já tem uma conta? Entre nela por aqui</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    botaoLogin: {
        backgroundColor: '#a7934d',
        marginTop: 30,
        height: 60,
        width: 325,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#fff'
    }
})