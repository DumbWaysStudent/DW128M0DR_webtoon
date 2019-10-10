import React, { Component } from 'react';
import { Container, Content, Button, Text, Icon,Left,Body, Header, Title, Fab} from 'native-base';
import {View, FlatList, Image, StyleSheet,SafeAreaView} from 'react-native'


export default class AddCreation extends Component {
    constructor(props) {
        super(props);
        this.state = {
          position: 1,
          interval: null,
          banners : [{
            title: 'The Secret of Angel',
            url: 'https://cdn.imagecomics.com/assets/i/releases/461826/Mercy_issue1_cvr_147581a7be02116581a0f653533a26b1.jpg',
            favorite:'110+ favorite'
          }, {
            title: 'Pasutri Gaje',
            url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
            favorite:'90 favorite'
          }, {
            title: 'Young Mom',
            url: 'https://cdn.imagecomics.com/assets/i/releases/461620/NomenOmen01-2ndPtg-Cover-2x3_147581a7be02116581a0f653533a26b1.jpg',
            favorite:'80 favorite'
          }]
        };
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
                <Title style={{color:'#676767'}}>My WebToon Creation</Title>
            </Body>
        </Header>
        <Content>
        <SafeAreaView>
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
                            <View>
                                <Text style={{color:'#676767', marginBottom:10}}> {item.favorite}</Text>
                            </View>
                        </View>
                    </View> 
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
            onPress={() => this.props.navigation.navigate('AddButtonPress')}>
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