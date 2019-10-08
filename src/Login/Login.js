import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';

import LoginForm from './LoginForm'

export default class Login extends Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.loginContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../img/logoWebtoon.png')}
                    />
                </View>
                <LoginForm />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor: '#E3E3E3'
    },
    loginContainer: {
        alignItems:'center',
        justifyContent:'center'
    },
    logo: {
       height:200,
       width:200
    },
})