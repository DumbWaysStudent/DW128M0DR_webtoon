import React, { Component } from 'react'
import { Container, Content, Text, Icon,Item, Input} from 'native-base'
import {View, FlatList, TouchableOpacity, Image, SafeAreaView} from 'react-native'

import {stylesGlobal} from '../../../assets/styles/stylesGlobal'
import SearchBar from '../../../components/SeacrhBar'

export default class Favorite extends Component {
    constructor(props) {
        super(props);
        this.state = {
          banners : [{
            title: 'The Secret of Angel',
            url: 'https://cdn.imagecomics.com/assets/i/releases/461826/Mercy_issue1_cvr_147581a7be02116581a0f653533a26b1.jpg',
            favorite:'110+ favorite'
          }, {
            title: 'Pasutri Gaje',
            url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
            favorite:'90 favorite'
          }, {
            title: 'Young Mom',
            url: 'https://cdn.imagecomics.com/assets/i/releases/461620/NomenOmen01-2ndPtg-Cover-2x3_147581a7be02116581a0f653533a26b1.jpg',
            favorite:'80 favorite'
          }]
        };
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
                data={this.state.banners}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) =>
                <TouchableOpacity onPress={()=>navigate('ListEpisode', {url:item.url, title:item.title})}>
                    <View style={{backgroundColor:'white',marginHorizontal:15, marginVertical:5, flex:2, flexDirection:'row', borderRadius:15}}>
                        <View>
                            <Image style={{width:100, height:100, padding:10, borderRadius:10}} source={{uri : item.url}}/>
                        </View>

                        <View style={{marginHorizontal:15, alignSelf:'center'}}>
                            <Text style={{fontSize:18, fontWeight:'bold', marginBottom:10}}>{item.title}</Text>
                            <View>
                                <Text style={{color:'#676767', marginBottom:10}}> {item.favorite}</Text>
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