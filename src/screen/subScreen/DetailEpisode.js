import React, { Component } from 'react'
import { Container, Content} from 'native-base'
import {View, FlatList, Image, StyleSheet,SafeAreaView, Share, AsyncStorage} from 'react-native'
import {connect} from 'react-redux'

import * as actionPage from '../../_redux/_actions/webtoons'
import HeaderGlobal from '../../components/HeaderGlobal'

class DetailEpisode extends Component {
  constructor(props){
    super(props)
    this.state = {
       webtoon_id : this.props.navigation.getParam('webtoons_id'),
       detail_id : this.props.navigation.getParam('detail_id')
    }
    }   
      componentDidMount() {
       this.props.handleGetPages(this.state.webtoon_id, this.state.detail_id)
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
                data={this.props.data}
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
const mapStateToProps = state => {
  return {
    data: state.pages.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleGetPages : (webtoon_id, detail_id) => dispatch (actionPage.handleGetPages(webtoon_id, detail_id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailEpisode)

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