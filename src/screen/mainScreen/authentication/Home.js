import React, { Component } from 'react'
import { Container, Content, Button, Text, Icon,Item, Input, Header, Body} from 'native-base'
import {View, FlatList, TouchableOpacity, Image, StyleSheet,SafeAreaView} from 'react-native'
import Slideshow from 'react-native-image-slider-show'
import {AsyncStorage} from 'react-native'

import {stylesGlobal} from '../../../assets/styles/stylesGlobal'
import axios from '../../../utils/API'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          position: 1,
          interval: null,
          banners : [{
            title: 'The Secret of Angel',
            url: ''
          }, {
            title: 'Pasutri Gaje',
            url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
          }, {
            title: 'Young Mom',
            url: 'https://cdn.imagecomics.com/assets/i/releases/461620/NomenOmen01-2ndPtg-Cover-2x3_147581a7be02116581a0f653533a26b1.jpg'
          }],

          webtoons:"",
          token:""
        }
      }
      
      async componentDidMount() {
        this.setState({
          token : await AsyncStorage.getItem('uToken'),
          
          interval: setInterval(() => {
            this.setState({
              position: this.state.position === this.state.banners.length ? 0 : this.state.position + 1
            });
          }, 2000) 
        })

        await axios({
          method: 'GET',
          url: '/webtoons',
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
        <View>
          <Slideshow
            height={300}
            overlay={true}
            arrowSize={0}
            indicatorSelectedColor="#2ce617"
            titleStyle={{color : "white"}}
            dataSource={this.state.banners}
            position={this.state.position}
            onPositionChanged={position => this.setState({ position })}
          />
        </View>
      
        <View>
            <Text style={stylesGlobal.title}>Favorite</Text>
        </View>
        
        <SafeAreaView>
            <FlatList
                data={this.state.webtoons}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) =>
                <TouchableOpacity onPress={()=>navigate('ListEpisode', {url:item.image, title:item.title, id:item.id})}>
                    <View style={{marginHorizontal:5, borderRadius:10,borderWidth:0.5, borderColor:'rgba(78,78,78, 0.5)'}}>
                        <Image style={{width:'100%', height:100, borderTopLeftRadius:10, borderTopRightRadius:10}} 
                               source={{uri : item.image}}
                        />
                        <View style={{width : 150}}>
                            <Text style={{ textAlign: 'center', marginVertical:5}}>{item.title}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                }
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>

        <View>
            <Text style={stylesGlobal.title}>All</Text>
        </View>

        <SafeAreaView>
            <FlatList
                data={this.state.webtoons}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) =>
                    <View style={{flexDirection:'row',marginHorizontal:10}}>
                        <View>
                          <TouchableOpacity onPress={()=>navigate('ListEpisode', {url:item.image, title:item.title})}>
                            <Image style={{width:100, height:100, borderRadius:10}} source={{uri : item.image}}/>
                          </TouchableOpacity>
                        </View>

                        <View style={{marginLeft:30, marginTop:5}}>
                            <Text style={{ textAlign: 'left'}}>{item.title}</Text>
                            <Button success style={{marginVertical: 20,  borderRadius:10, padding:10}}><Text>Favorite+</Text></Button>
                        </View>
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

const styles = StyleSheet.create({
    btnActive:{
        color:"#00D163"
    }
})