import React from 'react';
import BankScreen from '../../../src/screens/Bank.screen';
import {render} from '@testing-library/react-native';
import {useQuery, UseQueryResult} from 'react-query';

jest.mock('react-query');

describe('Bank Screen', () => {
  it('Show Loader when data is loading', () => {
    const mockUseQuery = useQuery as jest.Mock<UseQueryResult>;
    mockUseQuery.mockImplementation(args => ({
      ...args,
      isLoading: true,
    }));

    const {queryByTestId} = render(<BankScreen />);
    const element = queryByTestId('bank-loader-ai');
    expect(element).not.toBeNull();
  });

  it('Show error component if fail query.', () => {
    const mockUseQuery = useQuery as jest.Mock<UseQueryResult>;
    mockUseQuery.mockImplementation(args => ({
      ...args,
      isLoading: false,
      isError: true,
    }));

    const {queryByText} = render(<BankScreen />);
    const element = queryByText('Ups!, a error occurred!');
    expect(element).not.toBeNull();
  });

  it('Show list of banks.', () => {
    const mockUseQuery = useQuery as jest.Mock<UseQueryResult>;
    mockUseQuery.mockImplementation(args => ({
      ...args,
      isLoading: false,
      isError: false,
      data: [
        {
          url: 'https://www.google.com/santender',
          age: 10,
          bankName: 'santander',
          description: 'nada',
        },
      ],
    }));

    const {queryByText, debug} = render(<BankScreen />);
    const element = queryByText('santander');
    expect(element).not.toBeNull();
  });
});
