

# Projeto

## Configuração inicial

- Criando o projeto

```
npx create-expo-app mob --template
```
Aqui fiz as configurações do lint e husky


- Instalação do [NativeBase](https://docs.nativebase.io/install-expo)

```
yarn add native-base

npx expo install react-native-svg@12.1.1

npx expo install react-native-safe-area-context@3.3.2
```

- Configuração no package.json

```
"overrides": {
    "react": "18.0.0"
  }
```

- Fontes personalizadas

```
npx npx expo install expo-font @expo-google-fonts/roboto
```


## Outros Pacotes

### Uso de SVG com o pacote [react-native-svg-transformer](https://github.com/kristerkari/react-native-svg-transformer)


```
yarn add -D react-native-svg-transformer
```

Conforme documentação, devemos criar um arquivo com o nome `metro.config.js`. Ver conteúdo no readme da biblioteca.


### Biblioteca de autenticação

- auth-session
Documentação na página da [expo-auth-session](https://docs.expo.dev/versions/latest/sdk/auth-session/)

```
npx expo install expo-auth-session expo-random
```


- web-browser
Documentação na página da [expo-web-browser](https://docs.expo.dev/versions/latest/sdk/webbrowser/)

```
npx expo install expo-web-browser
```

### Outros pacotes

- phosphor-react-native
[phosphor-react-native](https://github.com/duongdev/phosphor-react-native)

```
yarn add phosphor-react-native
```

- country-list
[country-list](https://github.com/fannarsh/country-list)

```
yarn add country-list
yarn add -D @types/country-list
```

- react-native-country-flag
[react-native-country-flag](https://github.com/YannisHofmann/react-native-country-flag)

```
yarn add react-native-country-flag
```

- react-native-dotenv
[react-native-dotenv](https://github.com/goatandsheep/react-native-dotenv)
Será necessário alterar/criar alguns arquivos. Ver documentação.

```
yarn add -D react-native-dotenv
```

## Extras


- Port forward WSL2 --> Windows

```
netsh interface portproxy add v4tov4 listenport=19000 listenaddress=192.168.68.109 connectport=19000 connectaddress=$($(wsl hostname -I).Trim());
```
