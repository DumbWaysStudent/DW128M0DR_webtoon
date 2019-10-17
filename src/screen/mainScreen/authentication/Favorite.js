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
        await axios({
          method: 'GET',
          url: '/webtoons?favorite=true',
          headers: { 'Authorization': `Bearer ${this.state.token}` },
        }).then(response => {
            const webtoons = response.data;
            this.setState({webtoons})
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
                <TouchableOpacity onPress={()=>navigate('ListEpisode', {url:item.image, title:item.title})}>
                    <View style={{backgroundColor:'white',marginHorizontal:15, marginVertical:5, flex:2, flexDirection:'row', borderRadius:15}}>
                        <View>
                            <Image style={{width:100, height:100, padding:10, borderRadius:10}} source={{uri : item.image}}/>
                        </View>

                        <View style={{marginHorizontal:15, alignSelf:'center'}}>
                            <Text style={{fontSize:18, fontWeight:'bold', marginBottom:10}}>{item.title}</Text>
                            <View>
                                <Text style={{color:'#676767', marginBottom:10}}> {item.genre}</Text>
                            </View>
                        </View>
                    </View> 
                </TouchableOpacity>
                }                
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
        
        </Content>
      </Container>
    );
  }
}