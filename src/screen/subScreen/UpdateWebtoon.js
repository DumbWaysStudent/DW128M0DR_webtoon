import React, { Component } from 'react'
import { Container, Content, Text} from 'native-base'
import {View, FlatList, Image, StyleSheet,SafeAreaView, TouchableOpacity, AsyncStorage} from 'react-native'

import HeaderGlobal from '../../components/HeaderGlobal'
import {stylesGlobal} from '../../assets/styles/stylesGlobal'
import SearchBar from '../../components/SeacrhBar'
import axios from '../../utils/API'

export default class UpdateWebtoon extends Component {
    constructor(props) {
        super(props);
        this.state = {
          token:'',
          id:'',
          webtoons:'',
          title:'',
          genre:''
        }
      }

      async componentDidMount() {
        this.setState({
          token : await AsyncStorage.getItem('uToken'),
          id : await AsyncStorage.getItem('id')
        })
        let data = await axios({
          method: 'POST',
          url: `/user/${this.state.id}/webtoon`,
          headers: { 'Authorization': `Bearer ${this.state.token}` },
        })

        this.setState({webtoons:data.data})
      }

      add = async () =>{
        this.props.navigation.navigate('UpdateEpisode')
        let data = await axios({
          method: 'POST',
          url: `/user/${this.state.id}/webtoon`,
          headers: { 'Authorization': `Bearer ${this.state.token}` },
        })
            let obj = {};
            obj['title'] = await this.state.title
            obj['genre'] = await this.state.genre
            obj['image'] = 'https://wallpaperaccess.com/full/24525.jpg';
            this.state.webtoons.push(obj)
            await this.setState({webtoons:data.data})
            
    }

  render() {
    console.log(this.state.webtoons)
    return (
      <Container style={stylesGlobal.container}>
        <HeaderGlobal onPressBack={()=>this.props.navigation.goBack()} title="Create Weebtoon" iconName="md-checkmark" iconPress={this.add}/>
        <Content>
        <SafeAreaView>
          <SearchBar placeholder="New Title"  changeInput={text=>this.setState({title:text})}/>
          <SearchBar placeholder="Genre" changeInput={text=>this.setState({genre:text})}/>
          {/* <SearchBar placeholder="Image" valueInput={this.state.webtoons} changeInput={text=>this.setState({})}/> */}
      
            <FlatList
                data={this.state.webtoons}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) =>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('EditEpisode')}>
                    <View style={{backgroundColor:'white',marginHorizontal:15, marginVertical:5, flex:2, flexDirection:'row', borderRadius:15}}>
                        <View>
                            <Image style={{width:100, height:100, padding:10, borderRadius:15}} source={{uri : item.url}}/>
                        </View>

                        <View style={{marginHorizontal:15, alignSelf:'center'}}>
                            <Text style={{fontSize:18, fontWeight:'bold', marginBottom:10}}>{item.title}</Text>
                        </View>
                    </View> 
                </TouchableOpacity>
                }                
                keyExtractor={(item, index) => index.toString()}
            />
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => this.add()}>
             <Text style={{color: '#fff', textAlign: 'center', fontWeight: '700'}}>+Add Episode</Text>
            </TouchableOpacity>
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
    },
    input:{
        textAlign:'center',
        marginHorizontal: 15,
        height: 40,
        backgroundColor: 'white',
        marginBottom: 10,
        padding: 10,
        color: '#000',
        borderRadius:15,
    },
    buttonContainer:{
        borderRadius:15,
        backgroundColor: '#00D163',
        marginHorizontal:15,
        paddingVertical: 15
    },
})