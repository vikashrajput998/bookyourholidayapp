import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableHighlight,
  Modal,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {color} from 'react-native-reanimated';

const {height, width} = Dimensions.get('window');
export function HomeScreen({navigation}) {
  const [modalVisible, setModalVisible] = React.useState(false);
  return (
      <ImageBackground
        source={require('../assets/holibk.jpg')}
        style={{height, width, flex: 1}}>
      <View
        style={{
          width: width,
          height: height * 0.3,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'orange',
            borderTopWidth: 5,
            borderRightWidth: 5,
            borderLeftWidth: 5,
            borderBottomWidth: 5,
            borderColor: 'black',
            height: height * 0.1,
            width: width * 0.9,
            borderRadius: height * 0.02,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: height * 0.04,
              padding: 10,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Book Your Holiday
          </Text>
        </TouchableOpacity>
      </View>
      {/**
       *
       */}

      <View
        style={{
          height: height * 0.65,
          alignItems: 'flex-end',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <View style={{height: height * 0.7, justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('CategoriesScreen')}
            //  activeOpacity={0.7}
            style={{
              backgroundColor: 'blue',
              height: height * 0.1,
              width: width * 0.7,
              marginBottom: height * 0.03,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: height * 0.04,
              borderTopWidth: 3,
              borderBottomWidth: 3,
              borderRightWidth: 3,
              borderLeftWidth: 3,
            }}>
            <Text
              style={{
                fontSize: height * 0.03,
                fontWeight: 'bold',
                color: 'white',
              }}>
              Add Holiday
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ViewDetails')}
            activeOpacity={0.7}
            style={{
              backgroundColor: 'yellow',
              height: height * 0.1,
              width: width * 0.7,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: height * 0.04,
              borderTopWidth: 3,
              borderBottomWidth: 3,
              borderRightWidth: 3,
              borderLeftWidth: 3,
              marginBottom: height * 0.033,
            }}>
            <Text
              style={{
                fontSize: height * 0.03,
                fontWeight: 'bold',
                color: 'black',
              }}>
              View Holiday
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('AboutUs')}
            style={{
              backgroundColor: '#ff3399',
              height: height * 0.1,
              width: width * 0.7,
              borderWidth: 3,
              borderRadius: height * 0.04,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {/* <Icon name="ios-information-circle" type="ionicon" /> */}
            <Text style={{fontSize: height * 0.03, fontWeight: 'bold'}}>
              About Us
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>

            <TouchableHighlight
              style={{...styles.openButton, backgroundColor: '#2196F3'}}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
