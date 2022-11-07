import { Text, Center, Icon } from 'native-base';
import { Fontisto } from '@expo/vector-icons';
import { useAuth } from '../hooks/useAuth';

import LogoImg from '../assets/logo.svg';
import Button from '../components/Button';

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
