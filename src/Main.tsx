import React from 'react';
import { connect } from 'react-redux';

import { fetchRecipes } from './actions/recipes';
import { fetchIngredients } from './actions/ingredients';
import { fetchMarkets } from './actions/markets';

import { StyleSheet, Text, View } from 'react-native';
import { NavBar } from './Header';
import { RecipeList } from './components';

class Main extends React.Component {
  state = {
    recipes: [],
    ingredients: [],
    markets: []
  };

  componentDidMount() {
    const { fetchRecipes, fetchIngredients, fetchMarkets } = this.props;
    fetchRecipes();
    fetchIngredients();
    fetchMarkets();
  }

  render() {
    const { recipes, ingredients, markets } = this.state;
    const { appData } = this.props;
    
    console.warn('appData', appData);
    return (
      <>
        <View style={styles.headSlug} />
        <View style={styles.container}>
          <NavBar />
          <RecipeList recipes={recipes} />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  headSlug: {
    height: 25,
    width: '100%',
    backgroundColor: 'grey'
  },
  container: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});

export default connect(
  state => ({
    appData: state,
  }),
  {
    fetchRecipes,
    fetchIngredients,
    fetchMarkets,
  }
)(Main);
