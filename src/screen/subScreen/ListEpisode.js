import React, { Component } from 'react'
import { Container, Content,Text} from 'native-base'
import {View, FlatList, Image,SafeAreaView, TouchableOpacity, Share} from 'react-native'
import {connect} from 'react-redux'

import HeaderGlobal from '../../components/HeaderGlobal'
import { stylesGlobal } from '../../assets/styles/stylesGlobal'
import * as actionEpisodes from '../../_redux/_actions/webtoons'

class ListEpisode extends Component {
      componentDidMount() {
        const id = this.props.navigation.getParam('id')  
        this.props.handleGetEpisodes(id)
        // this.setState({
        //   token : await AsyncStorage.getItem('uToken')
        // })
        
        // await axios({
        //   method: 'GET',
        //   url: `/webtoon/${this.props.navigation.getParam('id')}/episodes`,
        //   headers: { 'Authorization': `Bearer ${this.state.token}` },
        // }).then(response => {
        //   console.log(response.data)
        //     const webtoons = response.data;
        //     this.setState({webtoons})
        // })
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
                data={this.props.data}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) =>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('DetailEpisode', {title:item.title, detail_id:item.id}) }}>
                    <View style={{backgroundColor:'white',marginHorizontal:10, marginVertical:5, flex:2, flexDirection:'row', borderRadius:15}}>
                        <View>
                          {console.log(item.webtoon_id, item.id,item)}
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
    )
  }
}

const mapStateToProps = state => {
  return {
    data:state.episodes.data
  }
}

const mapDispatchToProps = dispatch => {
  return{
    handleGetEpisodes : (id) => dispatch(actionEpisodes.handleGetEpisodes(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListEpisode)