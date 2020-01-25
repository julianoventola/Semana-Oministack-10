import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
  // Seta as rotas de cada página
  createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: {
        title: 'Bem Vindo'
      }
    },
    Profile:{
      screen: Profile,
      navigationOptions: {
        title: 'Perfil no Github'
      }
    }
  },{
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerBackTitleVisible: false,
      headerStyle: {
        backgroundColor: '#7D40E7'
      }
    }
  })
);

export default Routes;