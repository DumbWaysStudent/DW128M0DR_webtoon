import React, { Component } from 'react'
import { Container, Content,Text} from 'native-base'
import {View, FlatList, Image, StyleSheet,SafeAreaView, TouchableOpacity, Share} from 'react-native'

import HeaderGlobal from '../../components/HeaderGlobal'
import { stylesGlobal } from '../../assets/styles/stylesGlobal';

export default class ListEpisode extends Component {
    constructor(props) {
        super(props);
        this.state = {
          banners : [{
            title: 'epsd #1',
            url: 'https://cdn.imagecomics.com/assets/i/releases/461557/comic-book-industry-legend-jim-shooter-brings-new-title-slow-city-blues-to-image-comics_6c32595171.jpg',
            publish: '6 Oktober 2019'
          }, {
            title: 'epsd #2',
            url: 'https://data.whicdn.com/images/109804316/original.png',
            publish: '7 Oktober 2019'
          }, {
            title: 'epsd #3',
            url: 'https://data.whicdn.com/images/164573207/original.jpg',
            publish: '8 Oktober 2019'
          },{
            title: 'epsd #4',
            url: 'https://data.whicdn.com/images/77139070/original.jpg',
            publish: '9 Oktober 2019'
          },{
            title: 'epsd #5',
            url: 'https://data.whicdn.com/images/64619690/original.jpg',
            publish: '10 Oktober 2019'
          }]
        };
      }

    onClick = () => Share.share({
        title: 'Title',
        message: 'Share from Clone Webtoon ',
        url: 'www.example.com',
        subject: 'Subject'
      })

  render() {
    const {navigate} = this.props.navigation
    return (
      <Container style={stylesGlobal.container}>
        <HeaderGlobal onPressBack={()=>this.props.navigation.goBack()} title={this.props.navigation.getParam('title')} iconName="share" iconPress={()=>this.onClick()} />
        <Content>
        <SafeAreaView>
            <Image style={{marginHorizontal:0, height:300}} source={{uri : this.props.navigation.getParam('url')}}/>
        </SafeAreaView>

        <View>
            <Text style={stylesGlobal.title}>Episode</Text>
        </View>

        <SafeAreaView>
            <FlatList
                data={this.state.banners}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) =>
                <TouchableOpacity onPress={()=>{navigate('DetailEpisode', {title:item.title}) }}>
                    <View style={{backgroundColor:'white',marginHorizontal:10, marginVertical:5, flex:2, flexDirection:'row', borderRadius:15}}>
                        <View>
                            <Image style={{width:100, height:100, padding:10, borderRadius:10}} source={{uri : item.url}}/>
                        </View>
                    
                        <View style={{marginHorizontal:15, alignSelf:'center'}}>
                            <Text style={{fontSize:18, fontWeight:'bold', marginBottom:10}}>{item.title}</Text>
                            <View>
                                <Text style={{color:'#676767', marginBottom:10}}> {item.publish}</Text>
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