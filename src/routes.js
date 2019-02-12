import { createAppContainer, createStackNavigator } from 'react-navigation';

import Home from '~/pages/home';
import Issues from '~/pages/issues';

import { colors } from '~/styles';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Issues,
    },
    {
      defaultNavigationOptions: {
        headerTintColor: colors.darker,
        headerBackTitle: null,
      },
    },
  ),
);

export default Routes;
