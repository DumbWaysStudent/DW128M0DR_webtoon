import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import Guest from './navigator/Guest'

const Route = createSwitchNavigator({
    Guest
})

export default createAppContainer(Route)