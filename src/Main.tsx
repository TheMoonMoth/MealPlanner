import React from 'react';
import { connect } from 'react-redux';
import { createAppContainer } from 'react-navigation';

import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

class Main extends React.Component {
  render() {
    const { appData } = this.props;
    console.warn('appData', appData);
    return (
      <SafeAreaView>
        <View style={styles.headSlug} />
        <Text>{`Main.tsx`}</Text>
      </SafeAreaView>
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
  {}
)(Main);
