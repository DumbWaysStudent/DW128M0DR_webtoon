import { createAppContainer } from 'react-navigation'
import { createStackNavigator} from 'react-navigation-stack'

import BottomTabNavigator from './BottomTabNavigator'
import DetailStack from '../screen/main/sign/child/Detail'


const MemberNavigator = createStackNavigator({
    BottomTabNavigator : {
        screen : BottomTabNavigator,
        navigationOptions :{
            header : null
        }
    },
    Detail:{
        screen: DetailStack,
        navigationOptions:{
            header: null
        } 
    }
})



export default createAppContainer(MemberNavigator)