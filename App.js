import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Authentication from './src/navigator/Authentication'
import Unauthentication from './src/navigator/Unauthentication'

const App = createSwitchNavigator({
    Unauthentication,
    Authentication
})

export default createAppContainer(App)

//Untuk memarikan warning
console.disableYellowBox=true