import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { Recipe } from './Recipe';
import styles from './styles';

// TYPES:
import { RecipeT } from '../api/types';

interface Props {
  recipes: RecipeT[];
}

class RecipeList extends React.Component<Props> {
  renderItem = ({ item, index, separators }) => {
    // Logic to insert ADD_RECIPE element
    return (
      <Recipe item={item} key={item.id} />
    );
  }

  keyExtractor = (item: RecipeT) => item.id.toString();

  render() {
    const { recipes } = this.props;

    return (
      <SafeAreaView style={styles.listContainer}>
        <FlatList
          renderItem={this.renderItem}
          data={recipes.length > 0 ? recipes : []}
          keyExtractor={this.keyExtractor}
        />
      </SafeAreaView>
    );
  }
}

export default RecipeList;
