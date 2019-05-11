import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Loading from './containers/Loading'
import SignUp from './containers/SignUp'
import Main from './containers/Main'
import Login from './containers/Login'

const appNavigator = createSwitchNavigator({
    Loading: {
        screen: Loading
    },
    SignUp: {
        screen: SignUp
    },
    Login: {
        screen: Login
    },
    Main: {
        screen: Main
    },
}, {
        initialRouteName: 'Loading'
    }
)

export default createAppContainer(appNavigator)