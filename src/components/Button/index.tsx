import { Button as ButtonNB, Text, IButtonProps } from 'native-base';
import React from 'react';

interface Props extends IButtonProps {
  title: string;
  type?: 'PRIMARY' | 'SECONDARY';
}

const Button = ({ title, type, ...rest }: Props) => {
  return (
    <ButtonNB
      w="full"
      h={14}
      rounded="sm"
      fontSize="md"
      textTransform="uppercase"
      bg={type === 'SECONDARY' ? 'red.500' : 'yellow.500'}
      _pressed={{ bg: type === 'SECONDARY' ? 'red.700' : 'yellow.800' }}
      _loading={{ _spinner: { color: 'black' } }}
      {...rest}
    >
      <Text
        fontSize="sm"
        fontFamily="heading"
        color={type === 'SECONDARY' ? 'white' : 'black'}
      >
        {title}
      </Text>
    </ButtonNB>
  );
};

export default Button;
