import Carousel from '@/components/Carousel';
import BottomNavigation from '@/components/NavigationBar';
import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, SafeAreaView } from 'react-native';

export default function Dashboard() {
  const [currentTab, setCurrentTab] = useState('home');

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.profilePic} />
            <Text style={styles.title}>Welcome back,{'\n'}Arjay Aranas</Text>
          </View>
          <View style={styles.headerRight}>
            <Text style={styles.notification}>🔔</Text>
          </View>
        </View>
        <View style={styles.innerContainer}>
          <View style={styles.balance}>
            <Text style={styles.balanceTitle}>Balance remaining</Text>
            <View style={styles.balanceContainer}>
              <Text style={styles.balanceAmount}>₱402</Text>
            </View>
          </View>
          <View style={styles.records}>
            <View style={styles.recordsItem}>
              <View style={styles.recordsValue}>
                <View style={[styles.recordsIcon, { backgroundColor: '#1BFCB8' }]}>
                  <Text style={styles.recordsIconText}>↙</Text>
                </View>
                <View style={styles.recordsTextContainer}>
                  <Text style={styles.recordsTitle}>Income</Text>
                  <Text style={styles.recordsAmount}>₱500</Text>
                </View>
              </View>
            </View>
            
            <View style={styles.recordsItem}>
              <View style={styles.recordsValue}>
                <View style={[styles.recordsIcon, { backgroundColor: '#FC1B60' }]}>
                  <Text style={styles.recordsIconText}>↗</Text>
                </View>
                <View style={styles.recordsTextContainer}>
                  <Text style={styles.recordsTitle}>Expenses</Text>
                  <Text style={styles.recordsAmount}>₱98</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Carousel />
        <View style={styles.bottomPadding} />
      </ScrollView>
      <BottomNavigation 
        currentTab={currentTab}
        onTabPress={setCurrentTab}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    position: 'relative', // Add this to ensure the bottom navigation stays at the bottom
  },
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginTop: 16,
    backgroundColor: '#F4F4F4',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  title: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notification: {
    fontSize: 24,
    color: 'black',
  },
  innerContainer: {
    backgroundColor: '#EBEBEB',
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 16,
    marginTop: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  balance: {
    marginBottom: 16,
  },
  balanceTitle: {
    fontSize: 14,
    color: '#666',
  },
  balanceContainer: {
    marginTop: 4,
  },
  balanceAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  records: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  recordsItem: {
    flex: 1,
  },
  recordsValue: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  recordsIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  recordsIconText: {
    fontSize: 24,
    color: 'white',
    lineHeight: 28,
    textAlign: 'center',
  },
  recordsTextContainer: {
    flex: 1,
  },
  recordsTitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  recordsAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
    marginLeft: 16,
    marginTop: 24,
  },
  sectionSubtitle: {
    fontSize: 12,
    color: '#666',
    marginBottom: 16,
    marginLeft: 16,
  },
  bottomPadding: {
    height: 80, // Add padding at the bottom to prevent content from being hidden behind the navigation bar
  },
});