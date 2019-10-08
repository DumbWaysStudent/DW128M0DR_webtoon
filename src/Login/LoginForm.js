import React from 'react';
import {View, TextInput, TouchableOpacity,StyleSheet, Text, Alert} from 'react-native';

export default class LoginForm extends React.Component {
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
    <View>
        <TextInput 
            style={styles.input}
            value={this.state.email}
            onChangeText={(email)=>{this.setState({email}), this.validateEmail(email)}}
            returnKeyType="next"
            placeholder='Email'
            placeholderTextColor='rgba(225,225,225,10)' />
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
                disabled={check ? true : false}
                >
                <Text  style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>

    </View>
    )
}
}

const styles = StyleSheet.create({
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