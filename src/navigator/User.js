import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import BottomTabNavigator from './BottomTabNavigator';
import Detail from '../screen/init/Detail';
import MoreDetail from '../screen/init/MoreDetail'
import EditProfile from '../screen/init/EditProfile'
import AddCreation from '../screen/init/AddCreation'
import AddButtonPress from '../screen/init/AddButtonPress'
import CreateEps from '../screen/init/CreateEps'

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
    },
    EditProfile:{
        screen:EditProfile,
        navigationOptions:{
            header:null
        }
    },
    AddCreation:{
        screen:AddCreation,
        navigationOptions:{
            header:null
        }
    },
    AddButtonPress:{
        screen:AddButtonPress,
        navigationOptions:{
            header:null
        }
    },
    CreateEps:{
        screen:CreateEps,
        navigationOptions:{
            header:null
        }
    }
})



export default createAppContainer(User)