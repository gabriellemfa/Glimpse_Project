import React from 'react';
import {Text, View} from 'react-native';
import AppLayout from '../layout/AppLayout';

function CreateBoard({navigation}: {navigation: any}): React.JSX.Element {
  return (
    <AppLayout>
      <View>
        <Text>CreateBoard</Text>
      </View>
    </AppLayout>
  );
}

export default CreateBoard;
