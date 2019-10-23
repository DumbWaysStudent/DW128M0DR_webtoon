import React, { Component } from 'react'
import { Container, Content, Text, Icon,Item, Input} from 'native-base'
import {View, FlatList, TouchableOpacity, Image, SafeAreaView} from 'react-native'
import {AsyncStorage} from 'react-native';

import {stylesGlobal} from '../../assets/styles/stylesGlobal'
import axios from '../../utils/API'

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          webtoons:'',
          search:this.props.navigation.getParam('search'),
        }
      }

      async componentDidMount() {
        this.setState({
          token : await AsyncStorage.getItem('uToken') 
        })
        const data = await axios({
          method: 'GET',
          url: `/search?search=${this.state.search}`
        })
        this.setState({
            webtoons:data.data})
        }

      onChangeText = (text) => {
        this.setState({
          search:text
        })
      }
      
      searchPress = async () => {
        let querySearch = await axios({
          method: 'GET',
          url: `/search?search=${this.state.search}`
        })
        
        this.setState({
          webtoons:querySearch.data,
          search:''
        })
      }

  render() {
    console.log(this.state.search)
    const {navigate} = this.props.navigation
    return (
      <Container style={stylesGlobal.container}>
          <Item style={{borderRadius:10, marginLeft:10, marginRight:10, paddingVertical:3}}>
          {/* <SearchBar handleSearch={this.handleSearch} /> */}
            <Input placeholder="Search" value={this.state.search} onChangeText={(text)=>this.setState({search:text})} />
          <TouchableOpacity onPress={()=>this.searchPress()}>
              <Icon name="ios-search" />
          </TouchableOpacity>
        
          </Item>
        <Content>
        <SafeAreaView>
             <FlatList
             data={this.state.webtoons}
             horizontal={false}
             showsHorizontalScrollIndicator={false}
             renderItem={({item}) =>
             <TouchableOpacity onPress={()=>navigate('ListEpisode', {url:item.image, title:item.title, id:item.id})}>
                 <View style={{backgroundColor:'white',marginHorizontal:15, marginVertical:5, flex:2, flexDirection:'row', borderRadius:15}}>
                     <View>
                         <Image style={{width:100, height:100, padding:10, borderRadius:10}} source={{uri : item.image}}/>
                     </View>

                     <View style={{marginHorizontal:15, alignSelf:'center'}}>
                         <Text style={{fontSize:18, fontWeight:'bold', marginBottom:10}}>{item.title}</Text>
                         <View>
                             <Text style={{color:'#676767', marginBottom:10}}> {item.genre}</Text>
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