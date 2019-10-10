import React, { Component } from 'react';
import { Container, Content, Button, Text, Icon,Left,Body,Right, Header, Title, Fab,Input} from 'native-base';
import {View, FlatList, Image, StyleSheet,SafeAreaView, TouchableOpacity} from 'react-native'


export default class AddButtonPress extends Component {
    constructor(props) {
        super(props);
        this.state = {
          banners : [{
            title: 'The Secret of Angel',
            url: 'https://cdn.imagecomics.com/assets/i/releases/461826/Mercy_issue1_cvr_147581a7be02116581a0f653533a26b1.jpg',
          }, {
            title: 'Pasutri Gaje',
            url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
          }, {
            title: 'Young Mom',
            url: 'https://cdn.imagecomics.com/assets/i/releases/461620/NomenOmen01-2ndPtg-Cover-2x3_147581a7be02116581a0f653533a26b1.jpg',
          },]
        };
      }

      add = () =>{
        if (this.state.add === "" || this.state.add === null){
            alert('Please fill the blank')
        } else {
            var obj = {};
            obj['title'] = this.state.add;
            obj['url'] =  'https://wallpaperaccess.com/full/24525.jpg';
            this.state.banners.push(obj)
            this.setState({banners:this.state.banners})
        }
    }

  render() {
    return (
      <Container style={{backgroundColor:'#E3E3E3'}}>
         <Header style={{backgroundColor:'#E3E3E3', marginBottom:10}}>
            <Left>
                <Button transparent onPress={()=>this.props.navigation.goBack()} >
                    <Icon  name="ios-arrow-round-back" style={{color:'#676767'}}/>
                </Button>
            </Left>
        
            <Body>
                <Title style={{color:'#676767'}}>Create webtoon</Title>
            </Body>

            <Right>
                <Icon name="md-checkmark" onPress={this.add} style={{marginRight:10, color:'#676767'}}/>
            </Right>

        </Header>
        <Content>
        <SafeAreaView>
            <View style={{backgroundColor:'white', borderRadius:15, marginLeft:15, marginRight:15, marginVertical:10}}>
                <Input 
                    placeholder="New Title"
                    value={this.state.add}
                    onChangeText={text=>this.setState({add:text})}
                    
                />
            </View>
            <FlatList
                data={this.state.banners}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) =>
                    <View style={{backgroundColor:'white',marginHorizontal:15, marginVertical:5, flex:2, flexDirection:'row', borderRadius:15}}>
                        <View>
                            <Image style={{width:100, height:100, padding:10, borderRadius:15}} source={{uri : item.url}}/>
                        </View>

                        <View style={{marginHorizontal:15, alignSelf:'center'}}>
                            <Text style={{fontSize:18, fontWeight:'bold', marginBottom:10}}>{item.title}</Text>
                        </View>
                    </View> 
                }                
                keyExtractor={(item, index) => index.toString()}
            />
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={()=>alert('add')}>
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