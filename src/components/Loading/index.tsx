import { Center, Spinner } from 'native-base';
import React from 'react';
import { View } from 'react-native';

const Loading = () => {
  return (
    <Center flex={1} bg="gray.900">
      <Spinner color="yellow.500" />
    </Center>
  );
};

export default Loading;
