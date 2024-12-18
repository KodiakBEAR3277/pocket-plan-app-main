import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to the Expo</Text>
        <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.profilePic} />
        <Text style={styles.notification}>🔔</Text>
      </View>

      <View style={styles.budget}>
        <Text style={styles.sectionTitle}>Budget Overview</Text>
        <Text>Summary of Expenses: $10,000</Text>
      </View>

      <View style={styles.details}>
        <Text style={styles.sectionTitle}>Additional Information</Text>
        <Text>Category 1: Description, Value</Text>
        <Text>Category 2: Description, Value</Text>
        <Text>Category 3: Description, Value</Text>
      </View>

      <View style={styles.carousel}>
        <Text style={styles.sectionTitle}>Carousel UI Placeholder</Text>
        {/* Your carousel component code will go here */}
      </View>

      <View style={styles.nav}>
        <Text style={styles.navItem}>Home</Text>
        <Text style={styles.navItem}>Profile</Text>
        <Text style={styles.navItem}>Settings</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  notification: {
    fontSize: 18,
  },
  budget: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  details: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  carousel: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#f4f4f4',
  },
  navItem: {
    padding: 10,
  },
});
