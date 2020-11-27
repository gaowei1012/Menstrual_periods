/* eslint-disable @typescript-eslint/no-unused-vars */
import { connect } from 'react-redux'
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createReactNavigationReduxMiddleware, reduxifyNavigator } from 'react-navigation-redux-helpers'

import WelcomPage from '../views/welcom'
import NewsPage from '../views/news'
import GuestPage from '../views/guest'
import AboutPage from '../views/about'
import HomePage from '../views/home'
import LoginPage from '../views/login'
import VerifiPage from '../views/login/Verification'

export const rootCom: string = 'Init'

const InitNavigator = createSwitchNavigator({
    WelcomPage: {
        screen: WelcomPage,
        navigationOptions: {
            header: null,
        },
    },
})

const MainNavigator = createStackNavigator({
    HomePage: {
        screen: HomePage,
        navigationOptions: {
            header: null,
        },
    },
    GuestPage: {
        screen: GuestPage,
        navigationOptions: {
            header: null,
        },
    },
    NewsPage: {
        screen: NewsPage,
        navigationOptions: {
            header: null,
        },
    },
    AboutPage: {
        screen: AboutPage,
        navigationOptions: {
            header: null,
        },
    },
    LoginPage: {
        screen: LoginPage,
        navigationOptions: {
            header: null,
        },
    },
    VerifiPage: {
        screen: VerifiPage,
        navigationOptions: {
            header: null,
        },
    },
})

export const RootNavigation = createAppContainer(
    createSwitchNavigator({
        Init: InitNavigator,
        Main: MainNavigator,
    })
)

export const middleware = createReactNavigationReduxMiddleware('root', (state: any) => state.nav)

const AppWithNavigationState: any = reduxifyNavigator(RootNavigation, 'root')

const mapStateToProps = (state: any) => ({
    state: state.nav,
})

export default connect(mapStateToProps)(AppWithNavigationState)
