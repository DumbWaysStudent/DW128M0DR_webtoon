import React, { Component } from 'react';
import { Container, Content, Button, Text, Header, Body, Left, Right,Icon, Title} from 'native-base';
import {View, FlatList, Image, StyleSheet,SafeAreaView, TouchableOpacity, Share} from 'react-native';

export default class Detail extends Component {
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
        <Header style={{backgroundColor:'#E3E3E3'}}>
            <Left>
                <Button transparent onPress={()=>this.props.navigation.goBack()} >
                    <Icon  name="ios-arrow-round-back" style={{color:'#676767'}}/>
                </Button>
            </Left>
        
            <Body>
                <Title style={{color:'#676767'}}>{this.props.navigation.getParam('title')}</Title>
            </Body>
        
            <Right>
                <Icon name="share" onPress={()=>{this.onClick()}} style={{marginRight:10, color:'#676767'}}/>
            </Right>
        </Header>
        <Content>
        <SafeAreaView>
            <Image style={{marginHorizontal:15, height:200, borderRadius:15, marginTop:10}} source={{uri : this.props.navigation.getParam('url')}}/>
        </SafeAreaView>

        <View>
            <Text style={styles.title}>Episode</Text>
        </View>

        <SafeAreaView>
            <FlatList
                data={this.state.banners}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) =>
                <TouchableOpacity onPress={()=>{alert('Detil') }}>
                    <View style={{backgroundColor:'white',marginHorizontal:15, marginVertical:5, flex:2, flexDirection:'row', borderRadius:15}}>
                        <View>
                            <Image style={{width:100, height:100, padding:10, borderRadius:15}} source={{uri : item.url}}/>
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
