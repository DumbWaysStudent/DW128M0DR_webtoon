import React, { Component } from 'react';
import { Container, Content, Button, Text, Header, Left, Right,Icon, Title, Thumbnail, View} from 'native-base';
import {Image, StyleSheet,SafeAreaView,TouchableOpacity} from 'react-native';

export default class Profile extends Component {
  constructor(){
    super() 
    this.state = {
        data : {name : "Rendi Wijiatmoko"},    
        image: { uri : 'https://www.w3schools.com/howto/img_avatar.png'}
    }
  }
  render() {
    const{navigate} = this.props.navigation
    return (
      <Container style={{backgroundColor:'#E3E3E3'}}>
        <Header style={{backgroundColor:'#E3E3E3'}}>
            <Left>
                <Title style={{color:'#676767'}}>Profile</Title>
            </Left>
        
            <Right>
                <Icon name="md-create" onPress={()=>{navigate('EditProfile', {data:this.state.data.name, image:this.state.image.uri})}} style={{marginRight:10, color:'#676767'}}/>
            </Right>
        </Header>
        <Content>
        <SafeAreaView>
            <Image source={{uri:this.state.image.uri}} style={styles.profileImg} />
            <Text style={{alignSelf:'center', fontSize:22, fontWeight:'bold'}}>{}</Text>
        </SafeAreaView>
        <SafeAreaView style={{marginVertical:30}}>
           <Button onPress={()=>{this.props.navigation.navigate('AddCreation')}}style={{borderRadius:15,backgroundColor:"#E3E3E3", marginTop:1}}>
               <Text style={{color:"#676767"}}>
                    My WebToon creation
               </Text>
           </Button>

           <Button onPress={()=>{navigate('Guest')}} style={{borderRadius:15, marginTop:10,backgroundColor:"#E3E3E3" , marginVertical:1}}>
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