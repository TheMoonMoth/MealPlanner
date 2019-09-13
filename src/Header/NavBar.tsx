import React from 'react';
import { Text, View, Button } from 'react-native';
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

  // These menus should be drawers
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
        <Text style={styles.menuText}>menu items</Text>
        <Text style={styles.menuText}>Recent Lists (viewer and editor)</Text>
        <Text style={styles.menuText}>Recent Lists (viewer and editor)</Text>
        <Text style={styles.menuText}>Calander</Text>
        <Text style={styles.menuText}>Budgeter</Text>
        <Text style={styles.menuText}>Settings</Text>
      </View>
    );
  }

  renderAddMenu = () => {
    return(
      <View style={styles.menu}>
        <Text style={styles.menuText}>add options</Text>
        <Text style={styles.menuText}>New List</Text>
        <Text style={styles.menuText}>New Recipe</Text>
      </View>
    );
  }

  renderUserMenu = () => {
    return (
      <View style={styles.menu}>
        <Text style={styles.menuText}>user options</Text>
        <Text style={styles.menuText}>Profile</Text>
        <Text style={styles.menuText}>Account Settings</Text>
        <Text style={styles.menuText}>Login</Text>
        <Text style={styles.menuText}>Logout</Text>
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
