import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

interface NavigationProps {
  currentTab?: string;
  onTabPress?: (tab: string) => void;
}

const BottomNavigation: React.FC<NavigationProps> = ({ 
  currentTab = 'home',
  onTabPress = () => {} 
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.tab} 
        onPress={() => onTabPress('home')}
      >
        <Text style={[styles.tabIcon, currentTab === 'home' && styles.activeTab]}>🏠</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.tab} 
        onPress={() => onTabPress('list')}
      >
        <Text style={[styles.tabIcon, currentTab === 'list' && styles.activeTab]}>≡</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.addButton} 
        onPress={() => onTabPress('add')}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.tab} 
        onPress={() => onTabPress('target')}
      >
        <Text style={[styles.tabIcon, currentTab === 'target' && styles.activeTab]}>🎯</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.tab} 
        onPress={() => onTabPress('profile')}
      >
        <Text style={[styles.tabIcon, currentTab === 'profile' && styles.activeTab]}>👤</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    position: 'absolute',
    bottom: 0,
    width: width,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  tabIcon: {
    fontSize: 24,
    color: '#666',
  },
  activeTab: {
    color: '#FC1B60',
  },
  addButton: {
    width: 48,
    height: 48,
    backgroundColor: '#E0E0E0',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
  },
  addButtonText: {
    fontSize: 28,
    color: '#333',
    lineHeight: 32,
  },
});

export default BottomNavigation;