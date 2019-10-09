import { createAppContainer } from 'react-navigation'
import { createStackNavigator} from 'react-navigation-stack'

import BottomTabNavigator from './BottomTabNavigator'



const User = createStackNavigator({
    BottomTabNavigator : {
        screen : BottomTabNavigator,
        navigationOptions :{
            header : null
        }
    }
})



export default createAppContainer(User)