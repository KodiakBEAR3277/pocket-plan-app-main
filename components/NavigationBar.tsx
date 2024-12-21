// components/NavigationBar.tsx
import React from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { HomeIcon, RecordsIcon, AddIcon, GoalsIcon, AccountIcon } from './ui/icons';

const { width } = Dimensions.get('window');

interface NavigationProps {
  currentTab?: string;
  onTabPress?: (tab: string) => void;
}

const NavigationBar: React.FC<NavigationProps> = ({ 
  currentTab = 'home',
  onTabPress = () => {} 
}) => {
  const getIconColor = (tabName: string) => {
    return currentTab === tabName ? '#FC1B60' : '#666666';
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.tab} 
        onPress={() => onTabPress('home')}
      >
        <HomeIcon color={getIconColor('home')} size={24} />
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.tab} 
        onPress={() => onTabPress('records')}
      >
        <RecordsIcon color={getIconColor('records')} size={24} />
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.addButton} 
        onPress={() => onTabPress('add')}
      >
        <AddIcon size={24} />
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.tab} 
        onPress={() => onTabPress('goals')}
      >
        <GoalsIcon color={getIconColor('goals')} size={24} />
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.tab} 
        onPress={() => onTabPress('profile')}
      >
        <AccountIcon color={getIconColor('profile')} size={24} />
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
  addButton: {
    width: 48,
    height: 48,
    backgroundColor: '#E0E0E0',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
  },
});

export default NavigationBar;