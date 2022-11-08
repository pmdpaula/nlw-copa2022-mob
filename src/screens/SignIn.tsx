import { Fontisto } from '@expo/vector-icons';
import { Center, Icon, Text } from 'native-base';

import LogoImg from '../assets/logo.svg';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';

const SignIn = () => {
  const { signIn, user } = useAuth();

  return (
    <Center flex={1} bgColor="gray.900" p={7}>
      <LogoImg width={212} height={40} />
      <Button
        title="Entrar com Google"
        leftIcon={<Icon as={Fontisto} name="google" color="white" size="md" />}
        type="SECONDARY"
        mt={12}
        onPress={signIn}
      />

      <Text color="white" alignItems="center" mt={4}>
        Não utilizamos nenhuma informação além {'\n'} do seu e-mail para criação
        da sua conta.
      </Text>
    </Center>
  );
};

export default SignIn;