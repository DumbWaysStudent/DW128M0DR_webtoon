import React, { Component } from 'react'
import { Container, Content, Text, Icon,Item, Input} from 'native-base'
import {View, FlatList, TouchableOpacity, Image, SafeAreaView} from 'react-native'
import {AsyncStorage} from 'react-native';

import {stylesGlobal} from '../../../assets/styles/stylesGlobal'
import axios from '../../../utils/API'

export default class Favorite extends Component {
    constructor(props) {
        super(props);
        this.state = {
          token:'',
          webtoons:''
        }
      }

      async componentDidMount() {
        this.setState({
          token : await AsyncStorage.getItem('uToken') 
        })
        const data = await axios({
          method: 'GET',
          url: '/favorite?favorite=true',
          headers: { 'Authorization': `Bearer ${this.state.token}` },
        })
          this.setState({
            webtoons:data.data
          })
      }

  render() {
    const {navigate} = this.props.navigation
    return (
      <Container style={stylesGlobal.container}>
          <Item style={{borderRadius:10, marginLeft:10, marginRight:10, paddingVertical:3}}>
            <Input placeholder="Search" />
          <Icon name="ios-search" />
          </Item>
        <Content>
        <SafeAreaView>
            <FlatList
                data={this.state.webtoons}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) =>
                // <TouchableOpacity onPress={()=>navigate('ListEpisode', {url:item.image, title:item.title, id:item.id})}>
                    <View style={{backgroundColor:'white',marginHorizontal:15, marginVertical:5, flex:2, flexDirection:'row', borderRadius:15}}>
                    <TouchableOpacity style={{flex:80, flexDirection:'row'}} onPress={()=>navigate('ListEpisode', {url:item.image, title:item.title, id:item.id})}>
                        <Image style={{width:100, height:100, padding:10, borderRadius:10}} source={{uri : item.image}}/>
                        <View style={{marginHorizontal:15, alignSelf:'center', flex:40}}>
                            <Text style={{fontSize:18, fontWeight:'bold', marginBottom:10}}>{item.title}</Text>
                            <Text style={{color:'#676767', marginBottom:10}}> {item.genre}</Text>                          
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>console.log(item.isFavorite)}>
                        <Icon style={{marginVertical:30, marginRight:20, color:'#bb1542'}} name='remove-circle'/>
                    </TouchableOpacity>
                        
                    </View> 
               
                }
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
        
        </Content>
      </Container>
    );
  }
}