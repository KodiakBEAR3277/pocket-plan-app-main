import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs>
      {/* Login Screen */}
      <Tabs.Screen
        name="index" // Keep this as the Login screen
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
    </Tabs>
  );
}
