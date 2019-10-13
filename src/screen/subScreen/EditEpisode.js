import React, { Component } from 'react'
import { Container, Content, Button, Text, Icon, Input, Header,Right,Body, Left, Title} from 'native-base'
import {View, FlatList, TouchableOpacity, Image, StyleSheet,SafeAreaView} from 'react-native'
import  ImagePicker  from 'react-native-image-picker'

import HeaderGLobal from '../../components/HeaderGlobal'
import {stylesGlobal} from '../../assets/styles/stylesGlobal'
import SearchBar from '../../components/SeacrhBar'

export default class EditEpisode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            add:'',
            tempImg:[{
                   name: 'AKu Gak Cinta Komik',
                   uri: 'https://data.whicdn.com/images/109804316/original.png',
                   publish: '7 Oktober 2019'
                 }, {
                   name: 'Aku Meinstrim',
                   uri: 'https://data.whicdn.com/images/164573207/original.jpg',
                   publish: '8 Oktober 2019'
                 },{
                   name: 'Ohok Ohok',
                   uri: 'https://data.whicdn.com/images/77139070/original.jpg',
                   publish: '9 Oktober 2019'
                 },{
                   name: 'Hee Iya',
                   uri: 'https://data.whicdn.com/images/64619690/original.jpg',
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
          <HeaderGLobal onPressBack={()=>this.props.navigation.goBack()} title="Edit Episode" iconName="md-checkmark" iconPress={()=>this.props.navigation.navigate('UpdateCreation')} />
        <Content>
        <SafeAreaView>

        <SearchBar placeholder="Name" valueInput={this.state.add} vhangeIntput={text=>this.setState({add:text})} />
        
        <FlatList
                data={this.state.tempImg}
                renderItem={({item}) =>
                    <View style={{backgroundColor:'white',marginHorizontal:15, marginVertical:5, flex:3, flexDirection:'row', borderRadius:15}}>
                        <View style={{flex:30}}>
                            <Image source={{uri:item.uri}} style={{width:80, height:80, padding:10, borderRadius:15}} />
                        </View>
                        
                        <View style={{flex:30}}>
                            <Text style={{marginTop:25, textAlign: 'left'}}>{item.name}</Text>
                        </View>

                        <View style={{marginHorizontal:15, marginTop:15}}>
                            <Button onPress={()=>alert('delete')} danger style={{  borderRadius:15, padding:15}}><Text>Remove</Text></Button>
                        </View>
                    </View> 
                }                
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
        <TouchableOpacity
                style={[styles.buttonContainer,{marginTop:10}]}
                onPress={this.handleChoosePhoto}>
             <Text style={{color: '#fff', textAlign: 'center', fontWeight: '700'}}>+Image</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.buttonContainer, {backgroundColor:'red', marginVertical:10}]}
                onPress={()=>alert('Deleted')}>
             <Text style={{color: '#fff', textAlign: 'center', fontWeight: '700'}}>Delete Episode</Text>
            </TouchableOpacity>
        
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
    buttonContainer:{
        borderRadius:10,
        backgroundColor: '#00D163',
        marginHorizontal:10,
        paddingVertical: 15
    },
})
            