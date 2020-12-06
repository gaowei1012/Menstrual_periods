/* eslint-disable @typescript-eslint/no-unused-vars */
import { connect } from 'react-redux'
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createReactNavigationReduxMiddleware, reduxifyNavigator } from 'react-navigation-redux-helpers'

import WelcomPage from '../views/welcom'
import NewsPage from '../views/news'
import KnowledgePage from '../views/knowledge'
import PersonalPage from '../views/personal'
import HomePage from '../views/home'
import LoginPage from '../views/login'
import VerifiPage from '../views/login/Verification'
import SharePage from '../views/personal/Share'
import SettingPage from '../views/personal/Setting'
import RankingPage from '../views/personal/Ranking'
import HelpCenterPage from '../views/personal/HelpCenter'
import RecordingPage from '../views/personal/Recording'
import KnowledgeDetailPage from '../views/knowledge/KnowledgeDetail'

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
    KnowledgePage: {
        screen: KnowledgePage,
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
    PersonalPage: {
        screen: PersonalPage,
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
    SharePage: {
        screen: SharePage,
        navigationOptions: {
            header: null,
        },
    },
    SettingPage: {
        screen: SettingPage,
        navigationOptions: {
            header: null,
        },
    },
    RankingPage: {
        screen: RankingPage,
        navigationOptions: {
            header: null,
        },
    },
    HelpCenterPage: {
        screen: HelpCenterPage,
        navigationOptions: {
            header: null,
        },
    },
    RecordingPage: {
        screen: RecordingPage,
        navigationOptions: {
            header: null,
        },
    },
    KnowledgeDetailPage: {
        screen: KnowledgeDetailPage,
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
