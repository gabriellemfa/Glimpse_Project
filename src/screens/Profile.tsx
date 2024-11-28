import React from 'react';
import {Text, View} from 'react-native';
import AppLayout from '../layout/AppLayout';

function Profile({navigation}: {navigation: any}): React.JSX.Element {
  return (
    <AppLayout>
      <View>
        <Text>Profile</Text>
      </View>
    </AppLayout>
  );
}

export default Profile;
