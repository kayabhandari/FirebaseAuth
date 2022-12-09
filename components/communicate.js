import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Communicate({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Creative Communicators</Text>
        <Button
          title="Go to home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    );
  }

export default Communicate;