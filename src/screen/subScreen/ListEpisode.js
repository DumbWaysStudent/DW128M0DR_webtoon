import React, { Component } from 'react'
import { Container, Content,Text} from 'native-base'
import {View, FlatList, Image,SafeAreaView, TouchableOpacity, Share,AsyncStorage} from 'react-native'

import HeaderGlobal from '../../components/HeaderGlobal'
import { stylesGlobal } from '../../assets/styles/stylesGlobal';
import axios from '../../utils/API'

export default class ListEpisode extends Component {
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
          url: `/webtoon/${this.props.navigation.getParam('id')}/episodes`,
          headers: { 'Authorization': `Bearer ${this.state.token}` },
        }).then(response => {
          console.log(response.data)
            const webtoons = response.data;
            this.setState({webtoons})
        })
      }

    onClick = () => Share.share({
        title: 'Title',
        message: 'Share from Clone Webtoon ',
        url: 'www.example.com',
        subject: 'Subject'
      })

  render() {
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
                data={this.state.webtoons}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) =>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('DetailEpisode', {title:item.title, webtoon_id:item.webtoon_id, detail_id:item.id}) }}>
                    <View style={{backgroundColor:'white',marginHorizontal:10, marginVertical:5, flex:2, flexDirection:'row', borderRadius:15}}>
                        <View>
                            <Image style={{width:100, height:100, padding:10, borderRadius:10}} source={{uri : item.image}}/>
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