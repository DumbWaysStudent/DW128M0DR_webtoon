import { createAppContainer } from 'react-navigation'
import { createStackNavigator }  from 'react-navigation-stack'

import Login from '../screen/mainScreen/unauthentication/Login'

const Unauthentication = createStackNavigator({
    Login : {
        screen : Login,
        navigationOptions : {
            header : null
        }
    }
})

export default createAppContainer(Unauthentication)