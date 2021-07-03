/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import AppScreen from './screens/AppScreen';
import {StatusBar} from 'react-native';
import colors from './constant';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TripsScreen from './screens/TripsScreen';
import SavedScreen from './screens/SavedScreen';
import InboxScreen from './screens/InboxScreen';

const Stack = createStackNavigator();
const HomeStackScreen = createStackNavigator();
const TripsStackScreen = createStackNavigator();
const SavedStackScreen = createStackNavigator();
const InboxStackScreen = createStackNavigator();
const ProfileStackScreen = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="App" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeTab} />
        <Stack.Screen name="App" component={AppScreen} />
      </Stack.Navigator>
      <StatusBar backgroundColor={colors.background}/>
    </NavigationContainer>
  );
}

const HomeTab = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Explore') {
          iconName = 'compass';
        } else if (route.name === 'Trips') {
          iconName = 'briefcase-outline';
        }
          else if (route.name === 'Saved') {
          iconName = 'heart';
        } else if (route.name === 'Inbox') {
          iconName = 'chatbox-ellipses-outline';
        } else if (route.name === 'Profile') {
          iconName = 'person';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={24} color={color} />;
      },
    })}
      tabBarOptions={{
        activeTintColor: colors.secondary,
        inactiveTintColor: '#fff',
        style:{backgroundColor: colors.background, borderTopWidth: 0, elevation: 0, height:50,  paddingHorizontal: 40, alignItems: 'center', justifyContent: 'center'},
        tabStyle:{justifyContent: 'center', alignItems: 'center', paddingBottom: 10},
      }}
      backBehavior="none"
    >
      <Tab.Screen name="Explore" component={HomeStack} />
      <Tab.Screen name="Trips" component={TripsStack} />
      <Tab.Screen name="Saved" component={SavedStack} />
      <Tab.Screen name="Inbox" component={InboxStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>

  );};

  const HomeStack = ()=>{
    return (
      <HomeStackScreen.Navigator>
        <HomeStackScreen.Screen name="Home" component={HomeScreen}/>
      </HomeStackScreen.Navigator>
    );
  };
  const TripsStack = ()=>{
    return (
      <TripsStackScreen.Navigator>
        <TripsStackScreen.Screen name="Trips" component={TripsScreen}/>
      </TripsStackScreen.Navigator>
    );
  };
  const SavedStack = ()=>{
    return (
      <SavedStackScreen.Navigator>
        <SavedStackScreen.Screen name="Saved" component={SavedScreen}/>
      </SavedStackScreen.Navigator>
    );
  };
  const InboxStack = ()=>{
    return (
      <InboxStackScreen.Navigator>
        <InboxStackScreen.Screen name="Inbox" component={InboxScreen}/>
      </InboxStackScreen.Navigator>
    );
  };
  const ProfileStack = ()=>{
    return (
      <ProfileStackScreen.Navigator>
        <ProfileStackScreen.Screen name="Profile" component={ProfileScreen}/>
      </ProfileStackScreen.Navigator>
    );
  };
