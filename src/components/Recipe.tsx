import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { default as styles } from './styles';

interface RecipeT {
  available_market_id: number[];
  id: number;
  ingredients_included: number[];
  name: string;
  note: string;
  rating: number;
  times_bought: number;
}

interface RecipeProps {
  item: RecipeT;
}

export class Recipe extends Component<RecipeProps> {
  formatText = (text: string): string => {
    return text.toUpperCase();
  }

  render() {

    return (
      <View style={styles.listItem}>
        <Text style={styles.listItemText}>{this.formatText(name || '')}</Text>
      </View>
    );
  }
}

export default Recipe;
