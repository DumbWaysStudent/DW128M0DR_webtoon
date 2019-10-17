import { createAppContainer } from 'react-navigation'
import { createStackNavigator} from 'react-navigation-stack'

import BottomTabNavigator from './authentication/BottomTabNavigator'
import DetailEpisode from '../screen/subScreen/DetailEpisode'
import EditEpisode from '../screen/subScreen/EditEpisode'
import EditProfile from '../screen/subScreen//EditProfile'
import EditWebtoon from '../screen/subScreen/EditWebtoon'
import ListEpisode from '../screen/subScreen/ListEpisode'
import UpdateCreation from '../screen/subScreen/UpdateCreation'
import UpdateEpisode from '../screen/subScreen/UpdateEpisode'
import UpdateWebtoon from '../screen/subScreen/UpdateWebtoon'
import Register from '../screen/mainScreen/unauthentication/Register'

const Authentication = createStackNavigator({
    BottomTabNavigator : {
        screen : BottomTabNavigator,
        navigationOptions :{
            header : null
        }
    },
    DetailEpisode: {
        screen : DetailEpisode,
        navigationOptions :{
            header : null
        }
    },
    EditEpisode: {
        screen : EditEpisode,
        navigationOptions :{
            header : null
        }
    },
    EditProfile: {
        screen : EditProfile,
        navigationOptions :{
            header : null
        }
    },
    EditWebtoon: {
        screen : EditWebtoon,
        navigationOptions :{
            header : null
        }
    },
    ListEpisode: {
        screen : ListEpisode,
        navigationOptions :{
            header : null
        }
    },
    UpdateCreation: {
        screen : UpdateCreation,
        navigationOptions :{
            header : null
        }
    },
    UpdateEpisode: {
        screen : UpdateEpisode,
        navigationOptions :{
            header : null
        }
    },
    UpdateWebtoon: {
        screen : UpdateWebtoon,
        navigationOptions :{
            header : null
        }
    },
    Register: {
        screen : Register,
        navigationOptions :{
            header : null
        }
    },
}) 



export default createAppContainer(Authentication)