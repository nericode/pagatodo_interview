import React from 'react';
import {FlatList, Text} from 'react-native';
import {useQuery} from 'react-query';
import bankService from '../api/Bank.service';
import {QueryKeys} from '../shared/QueryKeys';
import BankItem from './components/BankItem';
import Loader from './components/Loader';
import bankStyles from './styles/bank.styles';

const BankScreen = () => {
  const {data, isLoading, isError} = useQuery(
    QueryKeys.GetAllBanks,
    bankService.getAll,
  );

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Text>Ups!, a error occurred!</Text>;
  }

  return (
    <FlatList
      data={data}
      renderItem={({item}) => <BankItem {...item} />}
      keyExtractor={item => item.bankName}
      ListHeaderComponent={
        <Text style={bankStyles.headerTitle}>List of Banks</Text>
      }
    />
  );
};

export default BankScreen;