import React, {Component} from 'react';
import {View, TextInput, TouchableOpacity,StyleSheet, Text, Image} from 'react-native';

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
      
    handleLogin = () => {
        
    }


    render(){
        const check = (this.state.emailNull && this.state.pwdNull)
        return(
            <View style={styles.container}>
                <View style={styles.loginContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../img/logoWebtoon.png')}
                    />
                </View>
                    <TextInput 
                        style={styles.input}
                        value={this.state.email}
                        onChangeText={(email)=>{this.setState({email}), this.validateEmail(email)}}
                        returnKeyType="next"
                        placeholder='Email'
                        placeholderTextColor='rgba(225,225,225,10)' 
                    />

                <View style={{position:'relative'}}>
                    <TextInput style = {styles.input}   
                        returnKeyType="go" 
                        placeholder='Password' 
                        placeholderTextColor='rgba(225,225,225,10)' 
                        secureTextEntry={this.state.showPassword}>
                    </TextInput>
                    
                    <TouchableOpacity style={{position:'absolute',bottom:25, right:'10%'}} onPress = { this.passwordVisibility }>
                        <View >
                            <Text style={styles.showhide}>{this.state.showPassword ? "show" : "hide" }</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                    
                    <TouchableOpacity
                        style={check?styles.btnDisable:styles.buttonContainer}
                        onPress={this.handleLogin}
                        disabled={check ? true : false}>

                        <Text  style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>

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
        borderRadius:15,
        backgroundColor: '#00D163',
        marginHorizontal:15,
        paddingVertical: 15
    },
    btnDisable:{
        borderRadius:15,
        backgroundColor: 'red',
        marginHorizontal:15,
        paddingVertical: 15
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