import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'

import { fetchRecipes } from '../actions/recipes';

import { AppState } from '../api/types';

class RecipeScreen extends Component {
  componentDidMount() {
    const { fetchRecipes } = this.props;
    fetchRecipes(); 
  }

  render() {
    const { recipes } = this.props;
    return (
      <View>
        <Text> Recipes </Text>
        {['recipes', 'ingreeds', 'markup'].map(recipe => {
          console.warn('recipe', recipe);
          return (
          <Text>{`recipe.name`}</Text>
        )})}
      </View>
    )
  }
}

export default connect((state: AppState) => ({
  recipes: state.recipes,
}), {
  fetchRecipes,
})(RecipeScreen);
