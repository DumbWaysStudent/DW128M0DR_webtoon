import React from 'react';
import {Footer,FooterTab,Button,Icon,Text} from 'native-base';

export default class FootBtn extends React.Component{
    render(){
        return(
            <Footer>
                <FooterTab style={{backgroundColor:'#E3E3E3'}}>
                    <Button onPress={() => this.props.navigation.navigate('BottomTabNavigato')}>
                        <Icon type="FontAwesome" name="braille" />
                        <Text active>For You</Text>
                    </Button>

                    <Button  >
                        <Icon type="FontAwesome" name="star" />
                          <Text>Favorite</Text>
                    </Button>

                    <Button>
                        <Icon type="FontAwesome" name="user" />
                        <Text>Profile</Text>
                    </Button>
                </FooterTab>
            </Footer>
        )
    }
}