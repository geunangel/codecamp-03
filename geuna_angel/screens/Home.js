import React from 'react';
import {Text, View, Image, Button} from 'react-native';
import auth from '@react-native-firebase/auth';

export default function Home() {
  const user = auth().currentUser;
  return (
    <View>
      <Text>{user?.displayName}</Text>
      <Text>{user?.email}</Text>
      <Image source={{uri: user?.photoURL}} />
      <View>
        <Button title="Logout" onPress={() => auth().signOut()} />
      </View>
    </View>
  );
}
