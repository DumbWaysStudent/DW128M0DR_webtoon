import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Guest from './Guest'
import User from './User'

const FirstNavigate = createSwitchNavigator({
    Guest,
    User
})

export default createAppContainer(FirstNavigate)