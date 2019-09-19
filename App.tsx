import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavBar } from './src/Header';
import { RecipeList } from './src/components';
import api from './src/api';

export default class App extends React.Component {
  state = {
    recipes: [],
    ingredients: [],
    markets: [],
  }
  
  async componentDidMount() {

    const recipeData = api.getRecipes();
    const ingredientData = api.getIngredients();
    const marketData = api.getMarkets();

    Promise.all([recipeData, ingredientData, marketData]).then((values) => {
      this.setState({
        recipes: values[0].recipes, // add type
        ingredients: values[1].ingredients,
        markets: values[2].markets,
      })
    });
  }

  render() {
    const { recipes, ingredients, markets } = this.state;
    console.warn('allData', recipes, ingredients, markets);
    return (
      <>
        <View style={styles.headSlug} />
        <View style={styles.container}>
          <NavBar />
          <RecipeList recipes={recipes}/>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  headSlug: {
    height: 25,
    width: '100%',
    backgroundColor: 'grey',
  },
  container: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
