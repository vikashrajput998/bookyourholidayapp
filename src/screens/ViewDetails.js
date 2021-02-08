import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacityBase,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {TakeHolidayContext} from '../screens/context';
const {height, width} = Dimensions.get('window');

export function ViewDetails({navigation}) {
  const {state, setState} = React.useContext(TakeHolidayContext);
  const [dataItems, setDataItems] = React.useState([]);
  const AllData = Object.values(state);
  const allKeys = Object.keys(state);
  let mArray = [];
  React.useEffect(() => {
    allKeys.map((key) => {
      state[key].map((e) => {
        mArray.push({...e, type: key});
      });
    });
    setDataItems(mArray);
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          width: width,
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <View
          onPress={() =>
            navigation.navigate('AddDetails', {item: item, details: details})
          }
          style={{
            width: width * 0.85,
            height: height * 0.25,
            borderRightWidth: 1,
            borderLeftWidth: 1,
            borderBottomWidth: 3,
            elevation: 1,
            borderRadius: 10,
            backgroundColor: '#ebd8b0',
            justifyContent: 'space-between',
            borderWidth: 1,
            marginTop: height * 0.02,
          }}>
          <Text
            style={{
              position: 'absolute',
              right: 0,
              zIndex: 3,
              fontWeight: 'bold',
              backgroundColor: '#434',
              color: '#fff',
              borderRadius: height * 0.01,
              padding: height * 0.002,
            }}>
            {item.type}
          </Text>

          <View
            style={{
              width: width * 0.7,
              height: height * 0.05,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              justifyContent: 'center',
              backgroundColor: '#fff',
              marginLeft: 2,
              marginTop: height * 0.03,
            }}>
            <Text
              style={{
                fontSize: height * 0.03,
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              {item.place}
            </Text>
          </View>
          <View
            style={{
              width: width * 0.75,
              height: height * 0.05,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              justifyContent: 'center',
              backgroundColor: '#fff',
              marginLeft: 2,
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
                {item.by}
              </Text>
            </View>
          </View>

          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontWeight: 'bold'}}>DATE :</Text>

            <View style={{alignItems: 'center'}}>
              <View
                style={{
                  width: 'auto',
                  alignItems: 'center',
                  padding: height * 0.01,
                  borderWidth: 2,
                  borderRadius: height * 0.2,
                  backgroundColor: '#ff9',
                }}>
                <Text style={{color: '#000', fontSize: height * 0.02}}>
                  {item.from}
                </Text>
              </View>
            </View>
            <View
              style={{
                width: width * 0.2,
                alignItems: 'flex-end',
                borderRadius: 10,
                height: height * 0.1,
                borderWidth: 2,
              }}>
              {item.image.length ? (
                <Image
                  source={{uri: item.image}}
                  style={{
                    height: height * 0.095,
                    borderWidth: 2,
                    borderRadius: 10,
                    width: width * 0.2,
                  }}
                />
              ) : (
                <Text style={{textAlign: 'center', alignSelf: 'center'}}>
                  No Image
                </Text>
              )}
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView>
    <View style={{width, height}}>
      <View
        style={{
          justifyContent: 'space-between',
          backgroundColor: 'purple',
          height: height * 0.1,
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
            View Details
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
          backgroundColor: '#f5fafa',
          height: height * 0.9,
        }}>
          {
            dataItems.length ?

            <FlatList
              data={dataItems}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem}
            />
            :
            <View
            style={{
              width: width * 0.8,
              height: height * 0.2,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0,0,0,0.5)',
              borderTopRightRadius: height * 0.03,
              borderBottomLeftRadius: height * 0.03,
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: height * 0.03,
                textAlign: 'center',
              }}>
              No Data Found , Please click on ' + ' to add data in category details page
            </Text>
          </View>
          }
      </View>
    </View>
    </SafeAreaView>
  );
}
