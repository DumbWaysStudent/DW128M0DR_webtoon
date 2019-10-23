import React, { Component } from 'react'
import { Container, Content, Button, Text, Icon,Item, Input} from 'native-base'
import {View, FlatList, TouchableOpacity, Image, StyleSheet,SafeAreaView} from 'react-native'
import Slideshow from 'react-native-image-slider-show'
import {connect} from 'react-redux'
// import handleGetWebtoons from '../../../_redux/_actions/webtoons'
// import webtoons from '../../../_store/webtoons'
import * as actionWebtoon from '../../../_redux/_actions/webtoons'

import {stylesGlobal} from '../../../assets/styles/stylesGlobal'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          position: 1,
          interval: null,
          banners : [{
            title: 'The Secret of Angel',
            url: 'https://media.gettyimages.com/photos/billy-girl-picture-id522217186?k=6&m=522217186&s=612x612&w=0&h=59Z5yvSiZZZ2vtcqF3Qtuy9fW0kB-i24i3Diem5BU6s='
          }, {
            title: 'Pasutri Gaje',
            url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
          }, {
            title: 'Young Mom',
            url: 'https://cdn.imagecomics.com/assets/i/releases/461620/NomenOmen01-2ndPtg-Cover-2x3_147581a7be02116581a0f653533a26b1.jpg'
          }],
        }
      }
      
      componentDidMount() {
        this.props.handleGetWebtoons()
      }  

  render() {
    const {navigate} = this.props.navigation
    console.log(this.props.data,'=====================================================>')
    return (
      <Container style={stylesGlobal.container}>
        <Item style={{backgroundColor: "transparent", borderRadius:10, marginLeft:10, marginRight:10, paddingVertical:3}}>
          <Input placeholder="Search" onChangeText={text => this.setState({search:text})} />
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('SearchBar', {search:this.state.search})}>
            <Icon name="ios-search" />
        </TouchableOpacity>
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
        {/* <Button onPress={console.log(AsyncStorage.getItem('name'))} /> */}
        <SafeAreaView>
            <FlatList
                data={this.props.data}
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
            {/* <Button onPress={()=>console.log(this.props.data,'===============================>momo jancok')} /> */}
        </View>

        <SafeAreaView>
            <FlatList
                data={this.props.data}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) =>
                    <View style={{flexDirection:'row',marginHorizontal:10}}>
                        <View>
                          <TouchableOpacity onPress={()=>navigate('ListEpisode', {url:item.image, title:item.title, id:item.id})}>
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

const mapStateToProps = state => {
  return {
    data: state.manga.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleGetWebtoons: () => dispatch(actionWebtoon.handleGetWebtoons())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
// export default Home;

// connect (mapStateToProps, mapDispatch)

const styles = StyleSheet.create({
  btnActive:{
      color:"#00D163"
  }
})