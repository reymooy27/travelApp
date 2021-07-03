/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useLayoutEffect } from 'react';
import {TouchableOpacity, View, ImageBackground, FlatList} from 'react-native';
import AppText from '../components/AppText';
import colors from '../constant';
import Ionicons from 'react-native-vector-icons/Ionicons';
import data from '../data';

const HomeScreen = ({navigation}) => {

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Discover',
      headerStyle: {
        backgroundColor: colors.background,
        shadowColor: 'transparent',
      },
      headerTitleAlign: 'center',
      headerTitleStyle:{
        color: '#fff',
        fontFamily: 'OpenSans-Bold',
      },
      headerRight: ()=> (
        <TouchableOpacity>
          <Ionicons name="search" color="#fff" size={26} style={{marginRight: 40}}/>
        </TouchableOpacity>
      ),
      headerLeft: ()=> (
        <TouchableOpacity>
          <Ionicons name="menu" color="#fff" size={26} style={{marginLeft: 40}}/>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      {/* button menu */}
      <View style={{marginTop: 20, marginBottom: 40, paddingHorizontal: 40, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <TouchableOpacity>
          <AppText fontStyle="Bold" style={{color: colors.secondary}}>Indonesia</AppText>
        </TouchableOpacity>
        <TouchableOpacity>
          <AppText fontStyle="Bold">Thailand</AppText>
        </TouchableOpacity>
        <TouchableOpacity>
          <AppText fontStyle="Bold">China</AppText>
        </TouchableOpacity>
        <TouchableOpacity>
          <AppText fontStyle="Bold">Vietnam</AppText>
        </TouchableOpacity>
      </View>

      {/* slide */}
      <View style={{marginBottom: 30}}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item)=> `${item.id}`}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          snapToAlignment={'start'}
          decelerationRate={'fast'}
          snapToInterval={160}
        />
      </View>

      {/* popular destination */}
      <View>
        <View style={{paddingHorizontal: 40, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30}}>
          <AppText fontStyle="Bold" style={{fontSize: 16}}>Popular destinations</AppText>
          <TouchableOpacity>
            <AppText fontStyle="SemiBold" style={{color: colors.secondary}}>See All</AppText>
          </TouchableOpacity>
        </View>
        <FlatList
          data={data}
          renderItem={renderItem2}
          keyExtractor={(item)=> `${item.id}`}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          snapToAlignment={'start'}
          decelerationRate={'fast'}
          snapToInterval={160}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const renderItem = ({item}) => {
  return (
    <Item image={item.image} name={item.name}/>
  );
};

const renderItem2 = ({item}) => {
  return (
    <Item image={item.image} name={item.name} small/>
  );
};

const Item = ({image, name, small})=> {
  return (
    <TouchableOpacity>
      <View style={{width: small ? 140 : 220, height: small ? 220 : 200, marginHorizontal: small ? 10 : 15}}>
        <ImageBackground source={{uri: image}} imageStyle={{borderRadius: 20, opacity: 0.7}} style={{width: '100%', height: '100%', resizeMode: 'cover'}}>
          <Ionicons name="heart" color="#fff" size={20} style={{position: 'absolute', right: 20, top: 15}}/>
          <AppText fontStyle="SemiBold" style={{position: 'absolute', bottom: 20, right: 20}}>{name}</AppText>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};
