import React, { Component } from 'react'
import { Container, Content, Button, Text, Icon, Input, Header,Right,Body, Left, Title} from 'native-base'
import {View, FlatList, TouchableOpacity, Image, StyleSheet,SafeAreaView} from 'react-native'
import  ImagePicker  from 'react-native-image-picker'

import HeaderGlobal from '../../components/HeaderGlobal'
import {stylesGlobal} from '../../assets/styles/stylesGlobal'
import Search from '../../components/SeacrhBar'
import SearchBar from '../../components/SeacrhBar'

export default class EditWebtoon extends Component {
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

      handleChoosePhoto = () => {
        const options = {
            title: 'Choose Photo',
            customButtons: [],
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
          };
          ImagePicker.showImagePicker(options, response => {
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              let tmpPhoto = {
                uri: response.uri,
                type: response.type,
                name: response.fileName,
              };
              const source = tmpPhoto;
                var obj = {};
                obj['uri'] = source.uri;
                obj['name'] = source.name;

                this.state.tempImg.push(obj)
                this.setState({
                tempImg : this.state.tempImg
              });
            }
          });
      };

      handleDelete=(name)=>{
        const {tempImg}=this.state
        this.setState({
            tempImg:tempImg.filter(item => item !== item.name)
        })
      }

  render() {
    return (
      <Container style={stylesGlobal.container}>
        <HeaderGlobal onPressBack={()=>this.props.navigation.goBack()} title="Edit Webtoon" iconName="md-checkmark" iconPress={()=>this.props.navigation.navigate('UpdateCreation')}/>
        <Content>
        <SafeAreaView>

        <SearchBar placeholder="name" valueInput={this.state.data} changeValue={text=>this.setState({add:text})} />
        <SafeAreaView>
            <FlatList
                data={this.state.banners}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) =>
                    <View style={{backgroundColor:'white',marginHorizontal:10, marginVertical:5, flex:2, flexDirection:'row', borderRadius:15}}>
                        <View>
                            <Image style={{width:100, height:100, padding:10, borderRadius:10}} source={{uri : item.url}}/>
                        </View>
                    
                        <View style={{marginHorizontal:15, alignSelf:'center'}}>
                            <Text style={{fontSize:18, fontWeight:'bold', marginBottom:10}}>{item.title}</Text>
                            <View>
                                <Text style={{color:'#676767', marginBottom:10}}> {item.publish}</Text>
                            </View>
                        </View>
                    </View> 
                }                
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>

            <TouchableOpacity
                style={[styles.buttonContainer,{marginTop:10}]}
                onPress={() => this.props.navigation.navigate('UpdateEpisode')}>
             <Text style={{color: '#fff', textAlign: 'center', fontWeight: '700'}}>+Add Episode</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.buttonContainer, {backgroundColor:'red', marginVertical:10}]}
                onPress={()=>alert('Deleted')}>
             <Text style={{color: '#fff', textAlign: 'center', fontWeight: '700'}}>Delete Webtoon</Text>
            </TouchableOpacity>
        </SafeAreaView>
        
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer:{
        borderRadius:10,
        backgroundColor: '#00D163',
        marginHorizontal:10,
        paddingVertical: 15
  },
})