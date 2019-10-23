import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import {Provider} from 'react-redux'
import store from './src/_redux/store'

import Authentication from './src/navigator/Authentication'
import Unauthentication from './src/navigator/Unauthentication'


const Routing = createAppContainer(createSwitchNavigator({
    Unauthentication,
    Authentication
}))

class App extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <Routing />
            </Provider>
        )
    }
}


export default App;

//Untuk memarikan warning
console.disableYellowBox=true