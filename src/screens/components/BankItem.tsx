import React from 'react';
import {Image, Text, View} from 'react-native';
import Images from '../../assets/Images';
import Bank from '../../shared/dto/Bank.dto';
import bankStyles from '../styles/bank.styles';

const BankItem = (bank: Bank) => {
  const resolveImage = () =>
    Images[String(bank.bankName).toLowerCase().replace(' ', '_')];

  return (
    <>
      <View key={bank.bankName} style={bankStyles.containerRow}>
        <View style={bankStyles.wrapperRound}>
          <Image style={bankStyles.imageRounded} source={resolveImage()} />
        </View>
        <View style={{flexShrink: 1}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
            {bank.bankName}
          </Text>
          <Text style={{fontSize: 14, color: 'gray'}}>{bank.description}</Text>
          <Text style={{fontSize: 14, color: 'gray'}}>Age, {bank.age}.</Text>
        </View>
      </View>
      <View style={{flex: 1, height: 2, backgroundColor: '#f4f4f4'}} />
    </>
  );
};

export default BankItem;
