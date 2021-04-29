"# app-mobile-devpedreiro" 

#Adicionando styled-components
yarn add styled-components

#Adicionando react-navigations
yarn add @react-navigation/native

#React Native project
yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

#configurando 
react-native link

#React Native project com IOS
npx pod-install ios

#Adicionar em index.js
import 'react-native-gesture-handler'

#stack navigator
yarn add @react-navigation/stack

#Tab navigation
yarn add @react-navigation/bottom-tabs

#Adicionando react-native-vector-icons
yarn add react-native-vector-icons

#configurando 
react-native link react-native-vector-icons

#Para salvar o tojen de acesso vamos adicionar o async-storage
@react-native-community/async-storage

#Para buscarmos a localização vamos adicionar o geolocation
@react-native-community/geolocation

#Versões mais novas do android precisa adicionar permissions
yarn add react-native-permissions

#Configurando android  /app/src/AndroidManifest.xml
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />

#Adicionando swiper
yarn add react-native-swiper

#Biblioteca para auxiliar uso de svg
yarn add react-native-svg

#Biblioteca para auxiliar uso de svg

#Dentro de metro.config.js faça um merge com
###############
const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts }
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer")
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"]
    }
  };
})();
################

