import React, {Component} from 'react'
import {View, TextInput, TouchableOpacity,StyleSheet, Text, Image, KeyboardAvoidingView} from 'react-native'

import {stylesGlobal} from '../../../assets/styles/stylesGlobal'

export default class Login extends Component {
    constructor(){
        super();
        this.state = {
            showPassword : true,
            email:"",
            password:"",
            emailNull:true,
            pwdNull:true,
       }
    } 
    passwordVisibility = () => {
        this.setState({
            showPassword:!this.state.showPassword
        })
    }

    validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if(re.test(email)===false){
            this.setState({
                emailNull:true
            })
          }else{
              this.setState({
                  emailNull:false
              })
          }
      };

      validatePassword = (password) => {
          if(password === "" || password===null){
              this.setState({
                pwdNull:false
              })
          } else {
              this.setState({
                  pwdNull:true
              })
          }
      }  


    render(){
        const {navigation} = this.props
        const check = (this.state.emailNull && this.state.pwdNull)
        return(
            <KeyboardAvoidingView style={stylesGlobal.container} enabled>
                <View style={styles.loginContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../../../assets/image/logo.png')}
                    />
                </View>
                    <TextInput 
                        style={stylesGlobal.input}
                        value={this.state.email}
                        onChangeText={(email)=>{this.setState({email}), this.validateEmail(email)}}
                        returnKeyType="next"
                        placeholder='Email'
                        placeholderTextColor='rgba(225,225,225,10)' 
                    />

                <View style={{position:'relative'}}>
                    <TextInput style = {stylesGlobal.input}   
                        returnKeyType="go" 
                        placeholder='Password' 
                        placeholderTextColor='rgba(225,225,225,10)' 
                        secureTextEntry={this.state.showPassword}>
                    </TextInput>
                    
                    <TouchableOpacity style={{position:'absolute',bottom:30, right:'10%'}} onPress = { this.passwordVisibility }>
                        <View >
                            <Text style={styles.showhide}>{this.state.showPassword ? "show" : "hide" }</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                    
                    <TouchableOpacity
                        style={check ?styles.btnDisable:styles.buttonContainer}
                        onPress={() => navigation.navigate('Home')}
                        disabled={check ? true : false}>

                        <Text  style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    loginContainer: {
        alignItems:'center',
        justifyContent:'center'
    },
    logo: {
       height:200,
       width:200
    },
    input:{
        marginHorizontal: 15,
        height: 40,
        backgroundColor: 'white',
        marginBottom: 10,
        padding: 10,
        color: '#000',
        borderRadius:15,
    },
    buttonContainer:{
        borderRadius:10,
        backgroundColor: '#00D163',
        marginHorizontal:15,
        paddingVertical: 20
    },
    btnDisable:{
        borderRadius:10,
        backgroundColor: '#828282',
        marginHorizontal:15,
        paddingVertical: 20
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
    showhide:{
        color:"rgba(10,10,10,0.5)"
    }
})