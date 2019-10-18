import React, { Component } from 'react'
import { Container, Content, Button, Text} from 'native-base'
import {Image, StyleSheet,SafeAreaView,AsyncStorage} from 'react-native';

import HeaderGlobal from '../../../components/HeaderGlobal'
import { stylesGlobal } from '../../../assets/styles/stylesGlobal';
import axios from '../../../utils/API'

export default class Profile extends Component {
  constructor(){
    super() 
    this.state = {
        token:'',
        webtoons:'',
        image: { uri : 'https://www.w3schools.com/howto/img_avatar.png'}
    }
  }

  async componentDidMount() {
    this.setState({
      token : await AsyncStorage.getItem('uToken') 
    })
    await axios({
      method: 'GET',
      url: '/login',
      headers: { 'Authorization': `Bearer ${this.state.token}` },
    }).then(response => {
        const webtoons = response.data;
        this.setState({webtoons})
    })
  }

  render() {
    return (
      <Container style={stylesGlobal.container}>
        <HeaderGlobal title="Profile" iconName="md-create" iconPress={()=>{this.props.navigation.navigate('EditProfile', {data:this.state.data.name, image:this.state.image.uri})}} style={{marginRight:10, color:'#676767'}} />
        <Content>
        <SafeAreaView>
            <Image source={{uri:this.state.image.uri}} style={styles.profileImg} />
            <Text style={{alignSelf:'center', fontSize:22, fontWeight:'bold'}}>Momo Satu</Text>
        </SafeAreaView>
        <SafeAreaView style={{marginVertical:30}}>
           <Button success onPress={()=>{this.props.navigation.navigate('UpdateCreation', {create:this.state.webtoons.id})}} style={{borderRadius:10, marginHorizontal:10}}>
               <Text style={{color:"#fff"}}>
                    My WebToon creation
               </Text>
           </Button>

           <Button danger onPress={()=>{this.props.navigation.navigate('Unauthentication')}} style={{borderRadius:10,marginHorizontal:10 , marginVertical:10}}>
               <Text style={{color:'#fff'}}>
                    Logout
               </Text>
           </Button>
        </SafeAreaView>
        
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