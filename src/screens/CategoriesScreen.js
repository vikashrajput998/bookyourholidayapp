import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacityBase,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {TakeHolidayContext} from '../screens/context'
const {height, width} = Dimensions.get('window');

export function CategoriesScreen({navigation}) {
  const {state,setState} = React.useContext(TakeHolidayContext)


  //render item function...[Start]
  const renderItem = ({item}) => (

    <TouchableOpacity
      onPress={() => navigation.navigate('Details', {details: item})}
      style={{
        width: width * 0.96,
        flexDirection: 'row',
        height: height * 0.15,
        borderRadius: 20,
        backgroundColor: 'orange',
        justifyContent: 'space-between',
        borderBottomRightRadius: 0,
        borderWidth: 4,
        marginTop: height * 0.01,
      }}>
      {/**
       * this is first view
       */}
      <View
        style={{
          width: width * 0.59,
          marginLeft: 5,
          height: height * 0.12,
          marginTop: 10,
          borderRadius: 30,
          borderBottomRightRadius: 5,
          borderBottomColor : 'black',
          borderBottomWidth :2,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}>
        <Text style={{fontSize: height * 0.03, fontWeight: 'bold',textDecorationLine: 'underline',color : 'black'}}>
          {item}
        </Text>
      </View>
      {/**
       * ye wala second,
       */}
      <Image
          source={require('../assets/holiicn.png')}
          style={{height: height * 0.13, width: width * 0.28}}
        />
    </TouchableOpacity>
  );


  //render Item function [stop]
  return (
    <SafeAreaView>
      <ImageBackground style={{width, height}} blurRadius={0} source={require('../assets/holibk.jpg')}>
      <View
        style={{
          justifyContent: 'space-between',
          backgroundColor: 'orange',
          height: height * 0.08,
          flexDirection: 'row',
          
        }}>
        <TouchableOpacity style={{justifyContent: 'center', padding: 5}} onPress={() => navigation.goBack()}>
          <Icon
            name="ios-arrow-back-outline"
            type="ionicon"
            size={height * 0.05}
            color="#fff"
          />
        </TouchableOpacity>
        <View style={{justifyContent: 'center'}}>
          <Text style={{color: '#fff', fontSize: height * 0.03, fontWeight:'bold'}}>
            Categories
          </Text>
        </View>
        <View style={{padding: 20}}>
          <Text></Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: height * 0.85,
        }}>
       {/**
        * 
      */}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={[
          'ABROAD',
          'BEACH',
          'CAMPING TRIP',
          'TRIP TO THE CITY',
          'ROAD TRIP',
          'CRUISE',
        ]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem} // ye render Item function upar hy
      />
      </View>
      </ImageBackground>
    </SafeAreaView>
    
  );
}
