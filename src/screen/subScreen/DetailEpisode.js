import React, { Component } from 'react'
import { Container, Content} from 'native-base'
import {View, FlatList, Image, StyleSheet,SafeAreaView, Share} from 'react-native'

import HeaderGlobal from '../../components/HeaderGlobal'

export default class DetailEpisode extends Component {
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
        message: 'Share from Clone Webtoon ', // Note that according to the documentation at least one of "message" or "url" fields is required
        url: 'www.example.com',
        subject: 'Subject'
      })

  render() {
    return (
      <Container style={{backgroundColor:'#E3E3E3'}}>
        <HeaderGlobal onPressBack={()=>this.props.navigation.goBack()} title={this.props.navigation.getParam('title')} iconName="share" iconPress={()=>{this.onClick()}} />
        <Content>
        <SafeAreaView>
            <FlatList
                data={this.state.banners}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) =>
                    <View style={{backgroundColor:'white'}}>
                        <View>
                            <Image style={{width:'100%', height:500}} source={{uri : item.url}}/>
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
    title:{
        marginHorizontal:15,
        marginVertical:10,
        fontSize:25,
        fontWeight:"bold"
    },
    btnActive:{
        color:"#00D163"
    }
})