import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { Recipe } from './Recipe';
import styles from './styles';

interface State {
  
}

interface Props {
  recipes: Array<Object>
}

const HOST = 'http://10.0.0.238:3000';

class RecipeList extends React.Component<Props, State> {
  renderItem = ({ item, index, separators }) => {
    // Logic to insert ADD_RECIPE element
    return (
      <Recipe item={item} key={item.id} />
    )
  }

  render() {
    const { recipes } = this.props;

    return (
      <SafeAreaView style={styles.listContainer}>
        <FlatList
          renderItem={this.renderItem}
          data={recipes.length > 0 ? recipes : []}
          keyExtractor={item => item.id.toString()}
        />
      </SafeAreaView>
    );
  }
};

export default RecipeList;
