/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useLayoutEffect } from 'react';
import { View, TouchableOpacity,Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppText from '../components/AppText';
import colors from '../constant';

const ProfileScreen = ({navigation}) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Profile',
      headerStyle: {
        backgroundColor: colors.background,
        shadowColor: 'transparent',
      },
      headerTitleAlign: 'center',
      headerTitleStyle:{
        color: '#fff',
        fontFamily: 'OpenSans-Bold',
        fontSize: 24,
      },
      headerRight: ()=> (
        <TouchableOpacity>
          <Ionicons name="pencil" color="#fff" size={24} style={{marginRight: 20}}/>
        </TouchableOpacity>
      ),
      headerLeft: ()=> (
        <TouchableOpacity onPress={()=> navigation.navigate('Explore')}>
          <Ionicons name="chevron-back" color="#fff" size={20} style={{marginLeft: 20}}/>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      {/* header */}
      <View style={{marginVertical: 20, justifyContent: 'center', alignItems: 'center'}}>
        <Image style={{width: 200, height: 200, borderRadius: 300}} source={{uri: 'https://i.pinimg.com/originals/83/ee/db/83eedbb5d33bfa08aeeb079f5353dddc.png'}}/>
        <AppText fontStyle="Bold" style={{marginVertical: 20, fontSize: 16}}>Rey Mooy</AppText>
        <AppText style={{color: colors.primary}}>Kupang, Nusa Tenggara Timur</AppText>
      </View>

      {/* details */}
      <View style={{paddingHorizontal: 20}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 60, borderBottomColor: colors.primary, borderBottomWidth: 1}}>
          <AppText style={{color: '#fff', paddingHorizontal: 10}}>Username</AppText>
          <AppText style={{color: colors.secondary, paddingHorizontal: 10}}>itzyaboirey</AppText>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 60, borderBottomColor: colors.primary, borderBottomWidth: 1}}>
          <AppText style={{color: '#fff', paddingHorizontal: 10}}>Email</AppText>
          <AppText style={{color: colors.secondary, paddingHorizontal: 10}}>itzyaboirey@gmail.com</AppText>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 60, borderBottomColor: colors.primary, borderBottomWidth: 1}}>
          <AppText style={{color: '#fff', paddingHorizontal: 10}}>Phone</AppText>
          <AppText style={{color: colors.secondary, paddingHorizontal: 10}}>+628000000000</AppText>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 60, borderBottomColor: colors.primary, borderBottomWidth: 1}}>
          <AppText style={{color: '#fff', paddingHorizontal: 10}}>Date of Birth</AppText>
          <AppText style={{color: colors.secondary, paddingHorizontal: 10}}>February 30, 2089</AppText>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 60}}>
          <AppText style={{color: '#fff', paddingHorizontal: 10}}>Address</AppText>
          <AppText style={{color: colors.secondary, paddingHorizontal: 10}}>Somewhere around here</AppText>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

