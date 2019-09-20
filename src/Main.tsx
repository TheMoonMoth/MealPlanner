import React from 'react';
import { connect } from 'react-redux';

import { fetchRecipes } from './actions/dataActions';

import { StyleSheet, Text, View } from 'react-native';
import { NavBar } from './Header';
import { RecipeList } from './components';
import api from './api/';

class Main extends React.Component {
  state = {
    recipes: [],
    ingredients: [],
    markets: []
  };

  async componentDidMount() {
    const { fetchRecipes } = this.props;
    fetchRecipes();
    const recipeData = api.getRecipes();
    const ingredientData = api.getIngredients();
    const marketData = api.getMarkets();

    Promise.all([recipeData, ingredientData, marketData]).then(values => {
      this.setState({
        recipes: values[0].recipes, // add type
        ingredients: values[1].ingredients,
        markets: values[2].markets
      });
    });
  }

  render() {
    const { recipes, ingredients, markets } = this.state;
    const { appData } = this.props;
    console.warn('appData', appData);
    console.warn('allData', recipes, ingredients, markets);
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
  state => {
    return {
      appData: state.appData,
    };
  },
  dispatch => {
    return {
      fetchRecipes: () => dispatch(fetchRecipes())
    };
  }
)(Main);
