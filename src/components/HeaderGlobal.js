import React, {Component} from 'react'
import {Header, Left, Body, Right, Icon, Title, Button} from 'native-base'

class HeaderGlobal extends Component{
    render(){
        return(
        <Header style={{backgroundColor:'white'}}>
        {this.props.onPressBack?
            <Left>
            <Button transparent onPress={this.props.onPressBack} >
                <Icon name="ios-arrow-round-back" style={{color:'#676767', fontSize:35}}/>
            </Button>
            </Left>:
            null    
        }
            <Body>
                 <Title style={{color:'#676767'}}>{this.props.title}</Title>
            </Body>
        {this.props.iconName?
            <Right>
                <Icon name={this.props.iconName} onPress={this.props.iconPress} style={{marginRight:10, color:'#676767'}}/>
            </Right>:
            null
        }
            
        </Header>
        )
    }
}

export default HeaderGlobal;