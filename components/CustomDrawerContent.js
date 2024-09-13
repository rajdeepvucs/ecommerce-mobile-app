import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

const CustomDrawerContent = (props) => {
  const navigation=useNavigation()
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Image
          source={require('../assets/logo.jpg')} // Your custom logo or profile image
          style={styles.logo}
        />
        <Text style={styles.username}>Username</Text>
      </View>
      <DrawerItemList {...props} />
      <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.logoutText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutButton} onPress={() => alert('Logged out')}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 80,
    width: 80,
    borderRadius: 50,
    elevation: 3,
  },
  username: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoutButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  logoutText: {
    fontSize: 16,
    color: '#d9534f',
  },
});

export default CustomDrawerContent;
