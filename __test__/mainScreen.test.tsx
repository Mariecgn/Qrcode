import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import MainScreen from '../src/screens/MainScreen';
import { Provider } from 'react-redux';
import store from '../src/store/store';
import { NavigationContainer } from '@react-navigation/native';

jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

describe('MainScreen', () => {
  it('A - Should match the snapshot of the MainScreen', () => {
    const { toJSON } = render(
      <Provider store={store}>
        <NavigationContainer>
          <MainScreen />
        </NavigationContainer>
      </Provider>
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('B - Should render the MainScreen component', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <NavigationContainer>
          <MainScreen />
        </NavigationContainer>
      </Provider>
    );
    expect(getByTestId('main-screen')).toBeTruthy();
  });

  it('C - Should have input fields for first name and last name', () => {
    const { getByPlaceholderText } = render(
      <Provider store={store}>
        <NavigationContainer>
          <MainScreen />
        </NavigationContainer>
      </Provider>
    );
    expect(getByPlaceholderText('Entrez votre prénom')).toBeTruthy();
    expect(getByPlaceholderText('Entrez votre nom')).toBeTruthy();
  });

  it('D - Should have a button to navigate to the QR Code screen', () => {
    const { getByText } = render(
      <Provider store={store}>
        <NavigationContainer>
          <MainScreen />
        </NavigationContainer>
      </Provider>
    );
    expect(getByText('Générer le QR Code')).toBeTruthy();
  });

  it('E - Should call the QR Code navigation function when the button is pressed', () => {
    const navigateMock = jest.fn();
    jest.spyOn(require('@react-navigation/native'), 'useNavigation').mockReturnValue({
      navigate: navigateMock,
    });

    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <NavigationContainer>
          <MainScreen />
        </NavigationContainer>
      </Provider>
    );

    // Simulate filling in the input fields
    fireEvent.changeText(getByPlaceholderText('Entrez votre prénom'), 'John');
    fireEvent.changeText(getByPlaceholderText('Entrez votre nom'), 'Doe');

    // Simulate pressing the button
    fireEvent.press(getByText('Générer le QR Code'));

    // Assert that the navigation function was called
    expect(navigateMock).toHaveBeenCalledTimes(1);
    expect(navigateMock).toHaveBeenCalledWith('QRCode');
  });
});
