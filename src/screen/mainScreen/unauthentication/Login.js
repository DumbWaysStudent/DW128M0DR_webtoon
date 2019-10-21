import React, {Component} from 'react'
import {View, TextInput, TouchableOpacity,StyleSheet, Text, Image, KeyboardAvoidingView, AsyncStorage} from 'react-native'


import {stylesGlobal} from '../../../assets/styles/stylesGlobal'
import axios from '../../../utils/API'

export default class Login extends Component {
    constructor(){
        super();
        this.state = {
            showPassword : true,
            email:"",
            password:"",
            emailNull:false,
       }
    } 
    passwordVisibility = () => {
        this.setState({
            showPassword:!this.state.showPassword
        })
    }

    validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if(re.test(email)===true){
            this.setState({
                emailNull:true
            })
          }else{
              this.setState({
                  emailNull:false
              })
          }
      }

    handleLogin = () => {
        axios({
            method: 'post',
            url: '/signin',
            data:{
                email:this.state.email,
                password:this.state.password
            }
          })
          .then((response) => {
            if(typeof response.data.token !== 'undefined'){
                AsyncStorage.setItem('uToken', response.data.token)
                // AsyncStorage.setItem('name', response.data.name.toString())
                this.props.navigation.navigate('Home')
              }else{
                alert('Email or Password is invalid')
              }
          }).catch(err=>{
              console.log(err)
          })
      }
    
    render(){
        const validation = ((this.state.password!="") && (this.state.emailNull==true))
        return(
            <KeyboardAvoidingView style={stylesGlobal.container} enabled>
                <View style={styles.loginContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../../../assets/image/logo.png')}
                    />
                </View>
                    <TextInput 
                        style={ this.state.emailNull? stylesGlobal.inputActive:stylesGlobal.input}
                        value={this.state.email}
                        onChangeText={(email)=>{this.setState({email}), this.validateEmail(email)}}
                        returnKeyType="next"
                        placeholder='Email'
                        placeholderTextColor='rgba(225,225,225,10)' 
                    />

                <View style={{position:'relative'}}>
                    <TextInput style = { this.state.password!="" ? stylesGlobal.inputActive:stylesGlobal.input}   
                        returnKeyType="go" 
                        placeholder='Password'
                        onChangeText={(text)=>this.setState({password:text})}
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
                        style={validation?styles.buttonContainer:styles.btnDisable}
                        onPress={() => this.handleLogin()}
                        disabled={validation?false:true}>
                        <Text  style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('Register')}>
                        <Text style={{ marginTop:25, textAlign: 'center', fontWeight: '700', color:'#828282'}}> don't have an account? <Text style={{color:'#00D163'}}>Register now</Text></Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('Home')}>
                        <Text style={{ marginTop:25, textAlign: 'center', fontWeight: 9000, color:'#828282'}}>Skip</Text>
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