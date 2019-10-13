import React, { Component } from 'react'
import { Container, Content, Button, Text, Header, Left, Right,Icon, Title} from 'native-base'
import {Image, StyleSheet,SafeAreaView} from 'react-native';

import HeaderGlobal from '../../../components/HeaderGlobal'
import { stylesGlobal } from '../../../assets/styles/stylesGlobal';

export default class Profile extends Component {
  constructor(){
    super() 
    this.state = {
        data : {name : "Rendi Wijiatmoko"},    
        image: { uri : 'https://www.w3schools.com/howto/img_avatar.png'}
    }
  }
  render() {
    return (
      <Container style={stylesGlobal.container}>
        <HeaderGlobal title="Profile" iconName="md-create" iconPress={()=>{this.props.navigation.navigate('EditProfile', {data:this.state.data.name, image:this.state.image.uri})}} style={{marginRight:10, color:'#676767'}} />
        <Content>
        <SafeAreaView>
            <Image source={{uri:this.state.image.uri}} style={styles.profileImg} />
            <Text style={{alignSelf:'center', fontSize:22, fontWeight:'bold'}}>{}</Text>
        </SafeAreaView>
        <SafeAreaView style={{marginVertical:30}}>
           <Button success onPress={()=>{this.props.navigation.navigate('UpdateCreation')}} style={{borderRadius:10, marginHorizontal:10}}>
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