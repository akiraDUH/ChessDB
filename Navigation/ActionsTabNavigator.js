import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import FormGenerator from '../screens/FormGenerator';
import SettingsScreen from '../screens/SettingsScreen';
import { useRoute } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const ActionsTabNavigator = () => {
  const route2 = useRoute();
  const user = route2.params;

  const ActionType = () => {
    if (user["actionType"] === 'Form') {
      return <FormGenerator />;
    } else {// we need to change this
      return <SettingsScreen />;
    }
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Create') {
            iconName = 'home';// karmi needs to change them 
          } else if (route.name === 'Read') {
            iconName = 'wpforms';
          } else if (route.name === 'Update') {
            iconName = 'cog';
          }else if (route.name === 'Delete') {
            iconName = 'cog';
          }

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
          "tabBarActiveTintColor": "tomato",
          "tabBarInactiveTintColor": "gray",
          "tabBarStyle": [
            {
              "display": "flex"
            },
            null
          ]
      })}
    >
      <Tab.Screen 
      name="Create" 
      component={ActionType}
      />
      <Tab.Screen name="Read" component={SettingsScreen} />
      <Tab.Screen name="Update" component={SettingsScreen} />
      <Tab.Screen name="Delete" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default ActionsTabNavigator;
