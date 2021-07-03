/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ImageBackground, TouchableOpacity, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppText from '../components/AppText';
import colors from '../constant';

const AppScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={{uri: 'https://images.unsplash.com/photo-1542317148-8b4bdccb33ea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xpZmZ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'}}
        style={{flex: 1, paddingHorizontal: 30, justifyContent: 'flex-end'}}
        imageStyle={{opacity: 0.5}}
        >
          <AppText fontStyle="Bold" style={{color: '#D2D5D8', fontSize: 40, paddingRight: 50}}>The Most Beautiful Place In The World</AppText>
          <AppText style={{color: '#D2D5D8', paddingTop: 20, paddingRight: 40}}>Plan your vacation on the most beautiful places in the world and enjoy every moment with us</AppText>
          <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
            <View style={{backgroundColor: colors.secondary, width: 180, borderRadius: 20, height: 60, justifyContent: 'center', alignItems: 'center', marginVertical: 40}}>
              <AppText fontStyle="Bold">Get Started</AppText>
            </View>
          </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default AppScreen;
