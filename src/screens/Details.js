import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacityBase,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {TakeHolidayContext} from './context';
import {useIsFocused} from '@react-navigation/native';

const {height, width} = Dimensions.get('window');

export function Details({navigation, route}) {
  const {details} = route.params;
  const {state, setState} = React.useContext(TakeHolidayContext);
  const isFocused = useIsFocused();
  const getInitialData = async () => {};
  React.useEffect(() => {
    getInitialData();
  }, [navigation, isFocused]);

  const handleDelete = (idx) => {
    setState({
      ...state,
      [details]: state[details].filter((e, index) => index !== idx),
    });
  };
  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          width: width * 0.95,
          justifyContent: 'space-between',
          alignSelf: 'center',
        }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('AddDetails', {item: item, details: details})
          }
          style={{
            width: width * 0.85,
            height: height * 0.25,
            borderRightWidth: 2,
            borderLeftWidth: 2,
            borderBottomWidth: 2,
            borderTopWidth: 2,
            elevation: 1,
            borderRadius: 10,
            backgroundColor: '#ebd8',
            justifyContent: 'space-between',
            borderWidth: 1,
            marginTop: height * 0.02,
          }}>
          <View
            style={{
              width: width * 0.75,
              height: height * 0.065,
              borderWidth: 3,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              justifyContent: 'center',
              backgroundColor: '#31795d',
              alignSelf: 'center',
              marginTop: 10,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: height * 0.03,
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              {item.place}
            </Text>
          </View>
          {/**
           *
           *
           */}
          <View
            style={{
              width: width * 0.8,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <View
              style={{
                width: width * 0.2,
                alignItems: 'flex-end',
                // borderRadius: height * 0.1,
                height: height * 0.1,
                // borderWidth: 2,
              }}>
              {item.image.length ? (
                <Image
                  source={{uri: item.image}}
                  style={{
                    height: height * 0.09,
                    borderWidth: 2,
                    borderRadius: height * 0.1,
                    width: width * 0.2,
                  }}
                />
              ) : (
                <Text style={{textAlign: 'center', alignSelf: 'center'}}>
                  No Image
                </Text>
              )}
            </View>

            <View
              style={{
                width: width * 0.55,
                height: height * 0.06,
                borderWidth: 2,
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
               justifyContent: 'center',
                backgroundColor: '#fff',
                marginTop: 10,
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Text
                  style={{
                    fontSize: height * 0.03,
                    textAlign: 'center',
                  }}>
                  By:
                </Text>
                <Text
                  style={{
                    fontSize: height * 0.03,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  {item.by.slice(0,5)}...
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: 3,
            }}>
            

            <View style={{alignItems: 'center'}}>
              <View
                style={{
                  width: width * 0.75,
                  height: height * 0.06,
                  alignItems: 'center',
                  justifyContent:'center',
                  borderWidth: 2,
                  borderRadius: height * 0.2,
                  backgroundColor: '#d0eaa3',
                }}>
                <Text style={{color: '#000', fontSize: height * 0.02}}>
                  {item.from}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: height * 0.01,
            width: width * 0.15,
            justifyContent: 'center',
          }}
          onPress={(e) => handleDelete(index)}>
          <Icon name="trash" type="ionicon" color="darkred" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <ImageBackground
        style={{width, height}}
        blurRadius={0}
        source={require('../assets/holibk.jpg')}>
        <View
          style={{
            justifyContent: 'space-between',
            backgroundColor: 'orange',
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
              Details
            </Text>
          </View>
          <TouchableOpacity
            style={{justifyContent: 'center', padding: 5}}
            onPress={() =>
              navigation.navigate('AddDetails', {details: details})
            }>
            <Icon
              name="ios-add-sharp"
              type="ionicon"
              size={height * 0.05}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: '#f5fafa',
            height: height * 0.9,
          }}>
          {state[details].length ? (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={state[details]}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem}
            />
          ) : (
            <View
              style={{
                width: width * 0.9,
                height: height * 0.15,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'black',
                borderTopRightRadius: height * 0.03,
                borderBottomLeftRadius: height * 0.03,
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: height * 0.03,
                  textAlign: 'center',
                }}>
                No Data Found , Please click on ' + ' to add data
              </Text>
            </View>
          )}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
