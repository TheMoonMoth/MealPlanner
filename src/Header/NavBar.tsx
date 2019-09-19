import React from 'react';
import { Text, View, Button } from 'react-native';
import NavButton from './NavButton';
import styles from './styles';

interface State {
  addMenuOpen: boolean;
  appMenuOpen: boolean;
  userMenuOpen: boolean;
}

class NavBar extends React.Component<{}, State> {
  state = {
    addMenuOpen: false,
    appMenuOpen: false,
    userMenuOpen: false,
  };

  handleAppMenu = () => {
    const { appMenuOpen } = this.state;
    this.setState({
      appMenuOpen: !appMenuOpen,
      addMenuOpen: false,
      userMenuOpen: false,
    });
  }

  handleAddMenu = () => {
    const { addMenuOpen } = this.state;
    this.setState({
      addMenuOpen: !addMenuOpen,
      appMenuOpen: false,
      userMenuOpen: false,
    });
  }

  // Refactor into drawers
  handleUserMenu = () => {
    const { userMenuOpen } = this.state;
    this.setState({
      userMenuOpen: !userMenuOpen,
      appMenuOpen: false,
      addMenuOpen: false,
    });
  }

  renderAppMenu = () => {
    return (
      <View style={styles.menu}>
        <NavButton title='Recent Lists (viewer and editor)'/>
        <NavButton title='View Recipes (viewer and editor)'/>
        <NavButton title='Calander'/>
        <NavButton title='Budgeter'/>
        <NavButton title='Settings'/>
      </View>
    );
  }

  renderAddMenu = () => {
    return(
      <View style={styles.rightMenu}>
        <NavButton title='New List' />
        <NavButton title='New Recipe' />
      </View>
    );
  }

  renderUserMenu = () => {
    return (
      <View style={styles.rightMenu}>
        <NavButton title='Profile' />
        <NavButton title='Account' />
        <NavButton title='Login' />
      </View>
    );
  }

  render() {
    const { addMenuOpen, appMenuOpen, userMenuOpen } = this.state;
    return (
      <View style={styles.container}>
        <Button
          onPress={this.handleAppMenu}
          title='Menu'
          accessibilityLabel='AppMenu'
          color='blue'
        />
        <Text style={styles.title}>Meal Planner</Text>
        <Button
          onPress={this.handleAddMenu}
          title='Add'
          accessibilityLabel='AddMenu'
          color='blue'
        />
        <Button
          onPress={this.handleUserMenu}
          title='User'
          accessibilityLabel='UserMenu'
          color='blue'
        />
        {appMenuOpen && this.renderAppMenu()}
        {addMenuOpen && this.renderAddMenu()}
        {userMenuOpen && this.renderUserMenu()}
      </View>
    );
  }
}

export default NavBar;
