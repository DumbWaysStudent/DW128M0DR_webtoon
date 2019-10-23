import React, { Component } from 'react'
import { Container, Content} from 'native-base'
import {View, FlatList, Image, StyleSheet,SafeAreaView, Share, AsyncStorage} from 'react-native'

import HeaderGlobal from '../../components/HeaderGlobal'
import axios from '../../utils/API'

export default class DetailEpisode extends Component {
    constructor(props) {
        super(props);
        this.state = {
          token:'',
          webtoons:'',
        }
      }
      
      async componentDidMount() {
        this.setState({
          token : await AsyncStorage.getItem('uToken')
        })
        
        await axios({
          method: 'GET',
          url: `/webtoon/${this.props.navigation.getParam('webtoon_id')}/episode/${this.props.navigation.getParam('detail_id')}`,
          headers: { 'Authorization': `Bearer ${this.state.token}` },
        }).then(response => {
          console.log(response.data)
            const webtoons = response.data;
            this.setState({webtoons})
        })
        console.log(this.state.webtoons)
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
                data={this.state.webtoons}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) =>
                    <View style={{backgroundColor:'white'}}>
                        <View>
                            <Image style={{width:'100%', height:500}} source={{uri : item.image}}/>
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