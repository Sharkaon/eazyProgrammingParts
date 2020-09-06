import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'

import styles from '../styles/index';

export default class Conteudo extends Component {
    render(){
        return(
            <>
            <View style={styles.titles}>
                <Text style={styles.titleContent}>
                    {this.props.title}    
                </Text>
            </View>
            
            <Text style={styles.subtitleContent}>{this.props.subtitle}</Text>

            <Text style={styles.textContent}>{this.props.content}</Text>

            <Text style={styles.textContent}>{this.props.content2}</Text>
            </>
            
        )
    }

    /*
    import Conteudo from './conteudo'
        <Conteudo
          title = "ALGORITMO"
          subtitle = "O Que É?"
          content= "Teste"
          content2="  Teste com parágrafo"
        />
    */
}