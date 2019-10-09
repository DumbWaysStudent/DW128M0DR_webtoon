import React, { Component } from 'react';
import { Container, Content, Button, Text, Header, Left, Right,Icon, Title, Thumbnail, View} from 'native-base';
import {Image, StyleSheet,SafeAreaView,TouchableOpacity} from 'react-native';

export default class Profile extends Component {
  render() {
    return (
      <Container style={{backgroundColor:'#E3E3E3'}}>
        <Header style={{backgroundColor:'#E3E3E3'}}>
            <Left>
                <Title style={{color:'#676767'}}>Profile</Title>
            </Left>
        
            <Right>
                <Icon name="md-create" onPress={()=>{alert('edit')}} style={{marginRight:10, color:'#676767'}}/>
            </Right>
        </Header>
        <Content>
        <SafeAreaView>
            <Image source={{uri:'https://www.w3schools.com/howto/img_avatar.png'}} style={styles.profileImg} />
            <Text style={{alignSelf:'center', fontSize:22, fontWeight:'bold'}}>Your Name</Text>
        </SafeAreaView>
        <SafeAreaView style={{marginVertical:30}}>
           <Button style={{backgroundColor:"#E3E3E3", marginTop:1}}>
               <Text style={{color:"#676767"}}>
                    My WebToon creation
               </Text>
           </Button>

           <Button style={{backgroundColor:"#E3E3E3" , marginVertical:1}}>
               <Text style={{color:'#676767'}}>
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
    title:{
        marginHorizontal:15,
        marginVertical:10,
        fontSize:25,
        fontWeight:"bold"
    },
    btnActive:{
        color:"#00D163"
    },
    profileImg: {
        marginVertical:15,
        alignSelf:'center',
        height: 200,
        width: 200,
        borderRadius: 100,
      },
})