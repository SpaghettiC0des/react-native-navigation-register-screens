# react-native-navigation-register-screens

Easier way to register RNN components.

# Example

## Function Component

```tsx
import {
  ScreenFC,
} from 'react-native-navigation-register-screens';

type MyFunctionComponentProps = {
  hello: string,
};

const MyFunctionComponent: ScreenFC<MyFunctionComponentProps> = ({
  hello,
  componentId,
}) {
  console.log(componentId);
  return (
    <View>
      <Text>{hello}</Text>
    </View>
  );
};

MyFunctionComponent.screenName = 'MyApp.Screens.MyFunctionComponent';

MyFunctionComponent.options = props => {
  console.log(props);

  return {
    topBar: {
      title: {
        text: 'Pushed screen title',
      },
    },
  };
};
```

# Registering Screens

```ts
import {registerScreens} from 'react-native-navigation-register-screens';

registerScreens([MyFunctionComponent, MyClassComponent, MyPureComponent]);
```

# With providers

If your using `react-redux`'s `Provider` or other similar libraries, you can provide a third parameter as the callback function.

```tsx
import {Provider} from 'react-redux';
import store from '../store';

registerScreens(
  [MyFunctionComponent, MyClassComponent, MyPureComponent],
  (Component) => (props) => (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  ),
);
```

# License

`react-native-navigation-register-screens` is MIT licensed, as found in the [LICENSE](https://github.com/karlmarxlopez/react-native-navigation-register-screens/blob/master/LICENSE) file.
