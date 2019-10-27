import React from 'react';
import { Text } from 'react-native';
import { Navigation } from 'react-native-navigation';
import registerScreens from '../registerScreens';
import { ScreenFunctionComponent } from '../..';

const Foo: ScreenFunctionComponent = function Foo() {
  return <Text>Foo</Text>;
};
Foo.screenName = 'screens.Foo';

const Bar: ScreenFunctionComponent = function Bar() {
  return <Text>Bar</Text>;
};

Bar.screenName = 'SideMenu.Bar';

const Baz: ScreenFunctionComponent = function Baz() {
  return <Text>Baz</Text>;
};

Baz.screenName = 'screens.Messaging.Baz';

function mockRegisterComponent() {
  return jest.fn(
    (
      screenName: string,
      componentProvider: () => ScreenFunctionComponent,
    ): (() => ScreenFunctionComponent) => {
      return () => componentProvider();
    },
  );
}

describe('registerScreens', () => {
  it('should register array of components as navigation component', () => {
    const mockedRegisterComponent = mockRegisterComponent()
    Navigation.registerComponent = mockedRegisterComponent;
    const screens: any[] = registerScreens([Foo, Bar, Baz]);

    expect(mockedRegisterComponent).toHaveBeenCalledTimes(3);
    expect(screens).toHaveLength(3);
    expect(screens[0]().screenName).toBe(Foo.screenName);
    expect(screens[1]().screenName).toBe(Bar.screenName);
    expect(screens[2]().screenName).toBe(Baz.screenName);
  });

  it('should have an optional prefix', () => {
    const mockedRegisterComponent = mockRegisterComponent()
    Navigation.registerComponent = mockedRegisterComponent;

    const screens: any[] = registerScreens([Foo], 'ACME');
    
    expect(mockedRegisterComponent).toHaveBeenCalledTimes(1);
    expect(screens).toHaveLength(1);
    expect(screens[0]().screenName).toBe('ACME.screens.Foo');
   
  });
});
