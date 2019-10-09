import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import BottomTabNavigator from './BottomTabNavigator';
import Detail from '../screen/init/Detail';
import MoreDetail from '../screen/init/MoreDetail'

const User = createStackNavigator({
    BottomTabNavigator : {
        screen : BottomTabNavigator,
        navigationOptions :{
            header : null
        }
    },
    DetailStack: {
        screen : Detail,
        navigationOptions :{
            header : null
        }
    },
    MoreDetail:{
        screen:MoreDetail,
        navigationOptions:{
            header:null
        }
    }
})



export default createAppContainer(User)