import React, { Component } from 'react'
import { Container, Content, Text} from 'native-base'
import {Image, StyleSheet,SafeAreaView,AsyncStorage, TouchableOpacity} from 'react-native';

import HeaderGlobal from '../../../components/HeaderGlobal'
import { stylesGlobal } from '../../../assets/styles/stylesGlobal';
import axios from '../../../utils/API'

export default class Profile extends Component {
  constructor(){
    super() 
    this.state = {
        token:'',
        webtoons:'',
        id:'',
        name:'',
        image: { uri : 'https://www.w3schools.com/howto/img_avatar.png'}
    }
  }

  async componentDidMount() {
    this.setState({
      token : await AsyncStorage.getItem('uToken'), 
      name : await AsyncStorage.getItem('name'),
      id : await AsyncStorage.getItem('id')
    })
    let data = await axios({
      method: 'GET',
      url: `/user/${this.state.id}/webtoons`,
      headers: { 'Authorization': `Bearer ${this.state.token}` },
    })
      this.setState({webtoons: data.data})
  }

  logout = () => {
    AsyncStorage.removeItem('uToken')
    AsyncStorage.removeItem('name')
    AsyncStorage.removeItem('id')
    this.props.navigation.navigate('Unauthentication')
    let data = axios({
      method: 'GET',
      url: `/webtoons`
    })
    this.setState({
      webtoons:data.data,
    })
  }

  render() {
    console.log(this.state.id)
    return (
      <Container style={stylesGlobal.container}>
        {this.state.token != undefined ? 
        <HeaderGlobal title="Profile" iconName="md-create" iconPress={()=>{this.props.navigation.navigate('EditProfile', {data:this.state.data.name, image:this.state.image.uri})}} style={{marginRight:10, color:'#676767'}} />
        :
        <HeaderGlobal title="Profile" style={{marginRight:10, color:'#676767'}} />
        }
        <Content>
        <SafeAreaView>
            <Image source={{uri:this.state.image.uri}} style={styles.profileImg} />
            <Text style={{alignSelf:'center', fontSize:22, fontWeight:'bold'}}>{this.state.name}</Text>
        </SafeAreaView>
        {this.state.token != undefined ? 
          <SafeAreaView style={{marginVertical:30}}>
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('UpdateCreation', {user_id:this.state.id})}} style={{borderRadius:10, backgroundColor: '#676767', marginHorizontal:15,paddingVertical: 15, marginTop:20}}>
              <Text style={{alignSelf:'center', color:'#fff', fontWeight:'700'}}>
                   My WebToon creation
              </Text>
          </TouchableOpacity>

          <TouchableOpacity danger onPress={()=>this.logout()} style={{borderRadius:10, backgroundColor: '#c70d3a', marginHorizontal:15,paddingVertical: 15, marginTop:10}}>
              <Text style={{alignSelf:'center', color:'#fff', fontWeight:'700'}}>
                   Logout
              </Text>
          </TouchableOpacity>
       </SafeAreaView> :
      
      <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Unauthentication')}} style={{borderRadius:10, backgroundColor: '#00D163', marginHorizontal:15,paddingVertical: 15, marginTop:20}}>
        <Text style={{alignSelf:'center', color:'#fff', fontWeight:'700'}}>
             Login
        </Text>
      </TouchableOpacity>
      }    
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    profileImg: {
        marginVertical:15,
        alignSelf:'center',
        height: 200,
        width: 200,
        borderRadius: 100,
      },
})