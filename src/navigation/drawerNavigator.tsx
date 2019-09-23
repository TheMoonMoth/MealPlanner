import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import RecipeScreen from '../screens/recipeScreen';
import MainScreen from '../screens/mainScreen';
import IngredientsScreen from '../screens/ingredientsScreen';
import MarketsScreen from '../screens/marketsScreen';

const MainDrawer = createDrawerNavigator(
  {
    Home: {
      // `ProfileScreen` is a React component that will be the main content of the screen.
      screen: MainScreen,
      // When `ProfileScreen` is loaded by the StackNavigator, it will be given a `navigation` prop.

      // Optional: When deep linking or using react-navigation in a web app, this path is used:
      path: "main/:name",
      // The action and route params are extracted from the path.

      // Optional: Override the `navigationOptions` for the screen
      navigationOptions: ({ navigation }) => ({
        title: `Home`,
        drawerIcon: ({ focused }) => (
          <Ionicons
            name="md-home"
            size={24}
            color={focused ? "blue" : "black"}
          />
        )
      })
    },
    Recipes: {
      screen: RecipeScreen,

      // Optional: When deep linking or using react-navigation in a web app, this path is used:
      path: "recipe/:name",
      // The action and route params are extracted from the path.

      // Optional: Override the `navigationOptions` for the screen
      navigationOptions: ({ navigation }) => ({
        title: `Recipes`,
        drawerIcon: ({ focused }) => (
          <Ionicons
            name="md-flask"
            size={24}
            color={focused ? "blue" : "black"}
          />
        )
      })
    },
    Ingredients: {
      screen: IngredientsScreen,

      // Optional: When deep linking or using react-navigation in a web app, this path is used:
      // path: 'people/:name',
      // The action and route params are extracted from the path.

      // Optional: Override the `navigationOptions` for the screen
      navigationOptions: ({ navigation }) => ({
        title: `Ingredients`,
        drawerIcon: ({ focused }) => (
          <Ionicons
            name="md-pricetags"
            size={24}
            color={focused ? "blue" : "black"}
          />
        )
      })
    },
    Markets: {
      screen: MarketsScreen,

      // Optional: When deep linking or using react-navigation in a web app, this path is used:
      // path: 'people/:name',
      // The action and route params are extracted from the path.

      // Optional: Override the `navigationOptions` for the screen
      navigationOptions: ({ navigation }) => ({
        title: `Markets`,
        drawerIcon: ({ focused }) => (
          <Ionicons
            name="md-cart"
            size={24}
            color={focused ? "blue" : "black"}
          />
        )
      })
    }
  },
  {
    // drawerBackgroundColor: 'grey',
    // drawerType: 'front',
    // drawerWidth: 200,
    // edgeWidth: 25,
  }
);

export default createAppContainer(MainDrawer);
