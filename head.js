import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native'

import styles from '../styles/index';

export default class Head extends Component{
    render(){
        return(
            <View style={styles.header}>
                <TouchableOpacity style={{width: '40%'}}>
                    <Image source={require('../assets/textoLogo_semFundo.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '15%', alignSelf: "flex-end", marginTop: -56}}>
                    <Image source={require('../assets/hamb.png')} style={{ height: 55, width: 55}}></Image>
                </TouchableOpacity>
            </View>
        )
    }

    /*
    import Head from './head';
    <Head /> 
    */
}