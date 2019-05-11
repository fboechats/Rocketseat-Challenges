import { createAppContainer, createStackNavigator } from "react-navigation";

import Welcome from "~/pages/Welcome";
import Issues from "~/pages/Issues";

import { colors } from "~/styles";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Welcome,
      Issues
    },
    {
      defaultNavigationOptions: {
        headerTintColor: colors.darker,
        headerBackTitle: null
      }
    }
  )
);

export default Routes;
