//npm i --save react-native-vector-icons
//npm i react-native-elements --save
//npm i shuffle-array
import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { CheckBox } from 'react-native-elements'

import styles from '../styles/index';

export default class Pergunta extends Component{

    state = {
        array: [
            {
                id: 0,
                checked: false,
                isRight: true,
            },
            {
                id: 1,
                checked: false,
                isRight: false,
            },
            {
                id: 2,
                checked: false,
                isRight: false,
            }
        ]
    }

    rightAnswer(){

    }

    wrongAnswer(){

    }

    render(){
        let rightAnswer;
        let shuffle = require('shuffle-array');
        shuffle(this.state.array);
        return(

            <>
            <Text style={styles.subtitleContent}>
                {this.props.titulo}
            </Text>

            <Text style={styles.textContent}>
                {this.props.pergunta}
            </Text>

            <View>

                {this.state.array.map((answer) => (
                    <CheckBox
                        key={answer.id}
                        title={this.props.respostas[answer.id]}
                        checked={answer.state}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        onPress={() => 
                            answer.isRight ? rightAnswer() : wrongAnswer()
                        }
                    />  
                ))}
                {/*<CheckBox
                    key='0'
                    title={this.props.respostas[0]}
                    checkedIcon=""
                    uncheckedIcon=""
                    checked={this.state[0]}
                    onPress={() => this.setState({ checked: !this.state.checked })}
                />

                <CheckBox
                    key='1'
                    title={this.props.respostas[1]}
                    checked={this.state[0]}
                    checkedIcon=""
                    uncheckedIcon=""
                    onPress={() => this.setState({ checked: !this.state.checked })}
                />

                <CheckBox
                    key='2'
                    title={this.props.respostas[2]}
                    checked={this.state[0]}
                    checkedIcon=""
                    uncheckedIcon=""
                    onPress={() => this.setState({ checked: !this.state.checked })}
                />*/}
                </View>
            </>
        )
    }
}