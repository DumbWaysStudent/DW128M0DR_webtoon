import React, { Component } from 'react';
import { Container, Content, Footer, FooterTab, Button, Text, Icon,Item, Input} from 'native-base';
import {View, FlatList, TouchableOpacity, Image, StyleSheet,SafeAreaView} from 'react-native'
import Slideshow from 'react-native-image-slider-show';


export default class ForYouStack extends Component {
    constructor(props) {
        super(props);
        this.state = {
          position: 1,
          interval: null,
          banners : [{
            title: 'The Secret of Angel',
            url: 'https://cdn.imagecomics.com/assets/i/releases/461826/Mercy_issue1_cvr_147581a7be02116581a0f653533a26b1.jpg'
          }, {
            title: 'Pasutri Gaje',
            url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
          }, {
            title: 'Young Mom',
            url: 'https://cdn.imagecomics.com/assets/i/releases/461620/NomenOmen01-2ndPtg-Cover-2x3_147581a7be02116581a0f653533a26b1.jpg'
          }]
        };
      }
      componentDidMount() {
        this.setState({
          interval: setInterval(() => {
            this.setState({
              position: this.state.position === this.state.banners.length ? 0 : this.state.position + 1
            });
          }, 2000)
        });
      }

  render() {
    return (
      <Container style={{backgroundColor:'#E3E3E3'}}>
          <Item style={{backgroundColor:'white', borderRadius:15, marginLeft:15, marginRight:15, marginVertical:10}}>
            <Input placeholder="Search" />
            <Icon name="ios-search" />
          </Item>
        <Content>
        <View style={{marginHorizontal:15}}>
          <Slideshow
            height={200}
            overlay={true}
            arrowSize={0}
            indicatorSelectedColor="#2ce617"
            titleStyle={{color : "white"}}
            dataSource={this.state.banners}
            position={this.state.position}
            onPositionChanged={position => this.setState({ position })} />
        </View>
      
        <View>
            <Text style={styles.title}>Favorite</Text>
        </View>
        
        <SafeAreaView>
            <FlatList
                data={this.state.banners}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) =>
                <TouchableOpacity onPress={() => alert(item.title)}>
                    <View style={{marginHorizontal:10, backgroundColor:'white', borderRadius:10}}>
                        <Image style={{width:'100%', height:150, padding:10, borderTopLeftRadius:10, borderTopRightRadius:10}} source={{uri : item.url}}/>
                        <View style={{width : 150}}>
                            <Text style={{ textAlign: 'center', marginTop:5}}>{item.title}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                }
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>

        <View>
            <Text style={styles.title}>All</Text>
        </View>

        <SafeAreaView>
            <FlatList
                data={this.state.banners}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) =>
                    <View style={{backgroundColor:'white',marginHorizontal:15, marginVertical:10, flex:2, flexDirection:'row', borderRadius:15}}>
                        <View>
                            <Image style={{width:130, height:130, padding:10, borderRadius:15}} source={{uri : item.url}}/>
                        </View>

                        <View style={{marginHorizontal:15, marginTop:15}}>
                            <Text style={{ textAlign: 'left'}}>{item.title}</Text>
                            <Button success style={{marginTop: 20,  borderRadius:15, padding:15}}><Text>Favorite+</Text></Button>
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