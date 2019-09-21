import React from 'react';
import { connect } from 'react-redux';

import { fetchRecipes } from './actions/recipes';

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
    const { fetchRecipes } = this.props;
    fetchRecipes();
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
  dispatch => ({
    fetchRecipes: () => dispatch(fetchRecipes())
  })
)(Main);
