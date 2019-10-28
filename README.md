# react-native-navigation-register-screens

This is a utility function to register array of screens instead of calling `Navigation.registerComponent` multiple times

# Example

## Function Component
```ts
import { ScreenFunctionComponent, ScreenComponent, ScreenPureComponent } from 'react-native-navigation-register-screens';

type MyFunctionComponentProps = {
    hello: string;
}

const MyFunctionComponent: ScreenFunctionComponent<MyFunctionComponentProps> = function ({ hello, componentId }) {

    console.log(componentId)
    return (
        <View>
            <Text>{hello}</Text>
        </View>
    )
};

MyFunctionComponent.screenName = 'MyApp.Screens.MyFunctionComponent';

MyFunctionComponent.options = props => {
    console.log(props);

    return {
        topBar: {
            title: {
            text: 'Pushed screen title'
            }
        }
    };
}
```

### Class Components
```ts
type MyComponentProps = {
    message: string;
}

class MyClassComponent extends ScreenComponent<MyComponentProps> {
    static screenName = 'MyApp.Screens.MyClassComponent';

    render() {
        const { componentId, message } = this.props;
        console.log(componentId);

        return (
            <View>
                <Text>{message}</Text>
            </View>
        );
    }
}

type MyPureComponentProps = {
    message: string;
}

class MyPureComponent extends ScreenComponent<MyPureComponentProps> {
    static screenName = 'MyApp.Screens.MyClassComponent';

    render() {
        const { componentId, message } = this.props;
        console.log(componentId);

        return (
            <View>
                <Text>{message}</Text>
            </View>
        );
    }
}

```

# Registering Screens
```ts

registerScreens([MyFunctionComponent, MyClassComponent, MyPureComponent]);

```

# Optional Prefix
You can provide a prefix as the second parameter, this will be added to the `screenName`

```ts

registerScreens(
    [
        MyFunctionComponent, 
        MyClassComponent, 
        MyPureComponent
    ], 
    'ACME'
);

```

# With providers
If your using `react-redux`'s `Provider` or other similar libraries, you can provide a third parameter as the callback function.
```tsx
import { Provider } from 'react-redux';
import store from '../store';

registerScreens(
    [
        MyFunctionComponent, 
        MyClassComponent, 
        MyPureComponent
    ], 
    'ACME', 
    Component => props => (
        <Provider store={store}>
            <Component {...props} />
        </Provider>
    )
);

```

# License
`react-native-navigation-register-screens` is MIT licensed, as found in the [LICENSE](https://github.com/karlmarxlopez/react-native-navigation-register-screens/blob/master/LICENSE) file.