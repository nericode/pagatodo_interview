import {ImageSourcePropType} from 'react-native';

interface IObjectKeys {
  [key: string]: ImageSourcePropType;
}

const Images: IObjectKeys = {
  paga_todo: require('./images/pagatodo.jpeg'),
  banamex: require('./images/banamex.jpeg'),
  bbva_bancomer: require('./images/bbva.png'),
  santander: require('./images/santander.jpeg'),
  scotiabank: require('./images/scotianbank.jpeg'),
};

export default Images;
