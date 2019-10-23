import { createAppContainer } from 'react-navigation'
import { createStackNavigator }  from 'react-navigation-stack'

import Login from '../screen/mainScreen/unauthentication/Login'
import Register from '../screen/mainScreen/unauthentication/Register'

const Unauthentication = createStackNavigator({
    Login : {
        screen : Login,
        navigationOptions : {
            header : null
        }
    },
    Register : {
        screen : Register,
        navigationOptions : {
            header : null
        }
    }
})

export default createAppContainer(Unauthentication)