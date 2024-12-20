import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, SafeAreaView } from 'react-native';

export default function Dashboard() {
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
        <View style={styles.innerContainer}>
          <View style={styles.details}>
            <View style={styles.detailsItem}>
              <Text style={styles.detailsTitle}>Transportation</Text>
              <Text style={styles.detailsValue}>₱70</Text>
            </View>
            <View style={styles.detailsItem}>
              <Text style={styles.detailsTitle}>Allowance</Text>
              <Text style={styles.detailsValue}>+₱500</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F4F4F4',
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
    marginTop: 16, // Add this line
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
    color: 'black',  // Changed from white since background is now light
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notification: {
    fontSize: 24,
    color: 'black',  // Changed from white since background is now light
  },
  innerContainer: {
    backgroundColor: '#EBEBEB',  // Changed from white
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 16,
    marginTop: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,  // Increased for Android
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
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailsItem: {
    flex: 1,
    marginHorizontal: 8,
  },
  detailsTitle: {
    fontSize: 14,
    color: '#666',
  },
  detailsValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});