import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacityBase,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  SafeAreaView
} from 'react-native';
import {Icon} from 'react-native-elements';
import {TakeHolidayContext} from '../screens/context';
const {height, width} = Dimensions.get('window');

export function AboutUs({navigation}) {
  return (
    <SafeAreaView>
    <ImageBackground blurRadius={1} source={require('../assets/holiday5.jpg')} style={{width, height}}>
      <View
        style={{
          justifyContent: 'space-between',
          backgroundColor: '#000',
          height: height * 0.07,
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{justifyContent: 'center', padding: 5}}
          onPress={() => navigation.goBack()}>
          <Icon
            name="ios-arrow-back-outline"
            type="ionicon"
            size={height * 0.05}
            color="#fff"
          />
        </TouchableOpacity>
        <View style={{justifyContent: 'center'}}>
          <Text
            style={{
              color: '#fff',
              fontSize: height * 0.03,
              fontWeight: 'bold',
            }}>
            About Us
          </Text>
        </View>
        <View style={{padding: 20}}>
          <Text></Text>
        </View>
      </View>
      <View
        source={require('../assets/holiday5.jpg')}
        style={{
          justifyContent: 'center',
          //   alignItems: 'center',
          padding: height * 0.02,
        //   backgroundColor: '#f5fafa',
        // backgroundColor: 'rgba(244,200,200,0.4)',
          height: height,
        }}>
        <View
          style={{
            height: height * 0.85,
            paddingTop: height * 0.2,
            paddingHorizontal: height * 0.02,
            backgroundColor: 'rgba(0,0,0,0.5)',

          }}>
          <Text
            style={{
              fontSize: height * 0.03,
              fontWeight: 'bold',
              color: '#ebe459',
              textAlign: 'center',
            }}>
            This is simple, amazing and ads free app to take holidays.
          </Text>
          <Text
            style={{
              fontSize: height * 0.03,
              fontWeight: 'bold',
              color: '#fff',
              textAlign: 'center',
              paddingTop: height * 0.04,
            }}>
            In this app, there are various types of places like Bengal,
            Uttarakhand, Lucknow, New Delhi etc.
          </Text>
          <Text
            style={{
              fontSize: height * 0.03,
              fontWeight: 'bold',
              color: '#fff',
              textAlign: 'center',
              paddingTop: height * 0.05,
            }}>
            Also in this app, you can manage your holiday details.
          </Text>
          <Text
            style={{
              fontSize: height * 0.03,
              fontWeight: 'bold',
              color: '#eb6f59',
              textAlign: 'center',
              paddingTop: height * 0.1,
            }}>
            Enjoy the App
          </Text>
        </View>
      </View>
    </ImageBackground>
    </SafeAreaView>
  );
}
