import React, { Component } from 'react'
import { Container, Content,Text, Icon, Fab} from 'native-base'
import {View, FlatList, Image, StyleSheet,SafeAreaView, TouchableOpacity, AsyncStorage} from 'react-native'

import HeaderGlobal from '../../components/HeaderGlobal'
import {stylesGlobal} from '../../assets/styles/stylesGlobal'
import axios from '../../utils/API'

export default class UpdateCreation extends Component {
    constructor(props) {
        super(props);
        this.state = {
          add:'',
          webtoons:''
        }
      }

      async componentDidMount() {
        this.setState({
          token : await AsyncStorage.getItem('uToken') 
        })
        axios({
          method: 'GET',
          url: `/user/${this.props.navigation.getParam('user_id')}/webtoons`,
          headers: { 'Authorization': `Bearer ${this.state.token}` },
        }).then(response => {
            const webtoons = response.data;
            this.setState({webtoons})
        })
      }

  render() {
    // console.log(this.props.navigation.getParam('user_id'))
    return (
      <Container style={stylesGlobal.container}>
         <HeaderGlobal onPressBack={()=>this.props.navigation.goBack()} title="My WebToon Creations" />
        <Content>
        <SafeAreaView>
            <FlatList
                data={this.state.webtoons}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) =>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('EditEpisode')}>
                    <View style={{backgroundColor:'white',marginHorizontal:15, marginVertical:5, flex:2, flexDirection:'row', borderRadius:15}}>
                        <View>
                            <Image style={{width:100, height:100, padding:10, borderRadius:15}} source={{uri : item.image}}/>
                        </View>

                        <View style={{marginHorizontal:15, alignSelf:'center'}}>
                            <Text style={{fontSize:18, fontWeight:'bold', marginBottom:10}}>{item.title}</Text>
                            <View>
                                <Text style={{color:'#676767', marginBottom:10}}>{item.genre}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity> 
                }                
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
        </Content>

        <Fab
            active={false}
            containerStyle={{ }}
            style={{ backgroundColor: 'green' }}
            position="bottomRight"
            onPress={() => this.props.navigation.navigate('UpdateWebtoon',{image:this.state.webtoons.image, url:this.state.webtoons.image})}>
            <Icon type="FontAwesome" name="plus" />
          </Fab>

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