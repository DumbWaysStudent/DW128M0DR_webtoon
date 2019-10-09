import React, { Component } from 'react';
import {
    Header ,
    Left,
    Button,
    Icon,
    Body,
    Title,
    Right
} from 'native-base'


class HeaderToon extends Component {
    render() {
        return (
            <Header>
                <Left>
                    <Button transparent onPress={this.props.onPressBack} >
                        <Icon  name="ios-arrow-round-back"/>
                    </Button>
                </Left>
                <Body>
                    <Title>{this.props.title}</Title>
                </Body>
                {this.props.iconShare ? 
                <Right>
                    <Icon color="white" name="share" onPress={this.props.pressIconShare}/>
                </Right>
                : null}
            </Header>
        );
    }
}
export default HeaderToon;