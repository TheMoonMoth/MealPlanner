import React from 'react';
import { Text, View, Alert, TouchableOpacity } from 'react-native';
import styles from './styles';

interface Props {
  title: string;
}

const boopAlert = () => Alert.alert('boop', 'you booped a button');

const NavButton = ({ title }: Props) => {
  return (
    <TouchableOpacity
      style={styles.navButton}
      onPress={boopAlert}
    >
      <Text style={styles.navButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default NavButton;
