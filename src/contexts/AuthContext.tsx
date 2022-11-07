import { createContext, ReactNode, useEffect, useState } from 'react';
import * as AuthSession from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

WebBrowser.maybeCompleteAuthSession(); // garatia do redirecionamento do web browser na autenticação

interface UserProps {
  name: string;
  avatarUrl: string;
}

export interface AuthContextDataProps {
  user: UserProps;
  isUserLoading: boolean;
  signIn: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextDataProps);

export const AuthContextProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<UserProps>({} as UserProps);
  const [isUserLoading, setIsUserLoading] = useState(false);

  const [request, response, prompAsync] = Google.useAuthRequest({
    // clientId: process.env.GOOGLE_ID,
    clientId:
      '942833079391-6bksr3uclrb2ldgnd854j8a61618i278.apps.googleusercontent.com',
    redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
    scopes: ['profile', 'email'],
  });

  const signIn = async () => {
    try {
      setIsUserLoading(true);

      await prompAsync();
    } catch (error) {
      setIsUserLoading(false);
      console.log(error);
      throw error;
    } finally {
      setIsUserLoading(false);
    }
  };

  const signInWithGoogle = (acess_token: string) => {
    console.log('TOKEN ==> ', acess_token);
    // console.log(acess_token);
  };

  useEffect(() => {
    if (response?.type === 'success' && response.authentication?.accessToken) {
      signInWithGoogle(response.authentication.accessToken);
    }
  }, [response]);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        isUserLoading,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
