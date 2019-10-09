import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import Guest from './navigator/Guest'

const FirstNavigate = createSwitchNavigator({
    Guest
})

export default createAppContainer(FirstNavigate)