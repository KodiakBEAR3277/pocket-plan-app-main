import { Tabs } from 'expo-router';
import { Text } from 'react-native';

export default function TabsLayout() {
  return (
    <Tabs>
      {/* Add an index screen */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Login',
          tabBarLabel: 'Login',
        }}
      />

      {/* Dashboard Screen */}
      <Tabs.Screen
        name="dashboard"
        options={{
          title: 'Dashboard',
          tabBarLabel: 'Dashboard',
        }}
      />

      {/* Login Screen */}
      <Tabs.Screen
        name="login"
        options={{
          title: 'Login',
          tabBarLabel: 'Login',
        }}
      />
    </Tabs>
  );
}