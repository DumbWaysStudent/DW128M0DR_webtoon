import React, {Component} from 'react'
import {View} from 'react-native'
import {Input} from 'native-base'

class SearchBar extends Component{
    render(){
        return(
            <View style={{borderColor:"rgba(78,78,78, 0.5)",borderWidth:1, borderRadius:10, marginHorizontal:10, marginVertical:10}}>
            <Input 
                placeholder={this.props.placeholder}
                value={this.props.valueInput}
                onChangeText={this.props.changeInput}            
            />
        </View>
        )
    }
}

export default SearchBar;