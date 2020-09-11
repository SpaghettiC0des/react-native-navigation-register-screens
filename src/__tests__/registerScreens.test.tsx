import React from 'react';
import {Text} from 'react-native';
import {Navigation} from 'react-native-navigation';
import registerScreens from '../registerScreens';
import {ScreenFC} from '../types';

const Foo: ScreenFC = function Foo() {
  return <Text>Foo</Text>;
};
Foo.screenName = 'screens.Foo';

const Bar: ScreenFC = function Bar() {
  return <Text>Bar</Text>;
};

Bar.screenName = 'SideMenu.Bar';

const Baz: ScreenFC = function Baz() {
  return <Text>Baz</Text>;
};

Baz.screenName = 'screens.Messaging.Baz';

function MyProvider({children}: {children: any}) {
  return children;
}

function mockRegisterComponent() {
  return jest.fn(
    (
      screenName: string,
      componentProvider: () => ScreenFC,
    ): (() => ScreenFC) => {
      return () => componentProvider();
    },
  );
}

describe('registerScreens', () => {
  it('should register array of components as navigation component', () => {
    const mockedRegisterComponent = mockRegisterComponent();
    Navigation.registerComponent = mockedRegisterComponent;
    const screens: any[] = registerScreens([Foo, Bar, Baz]);

    expect(mockedRegisterComponent).toHaveBeenCalledTimes(3);
    expect(screens).toHaveLength(3);
    expect(screens[0]().screenName).toBe(Foo.screenName);
    expect(screens[1]().screenName).toBe(Bar.screenName);
    expect(screens[2]().screenName).toBe(Baz.screenName);
  });

  it('should allow optional callback when wrapping screens with providers (e.g Redux Provider)', () => {
    const mockedRegisterComponent = mockRegisterComponent();
    Navigation.registerComponent = mockedRegisterComponent;

    const screens: any[] = registerScreens([Foo], (Component) => (props) => (
      <MyProvider>
        <Component {...props} />
      </MyProvider>
    ));

    expect(mockedRegisterComponent).toHaveBeenCalledTimes(1);
    expect(screens).toHaveLength(1);

    expect(screens[0]()().type).toEqual(MyProvider);
  });
});
