import {Navigation} from 'react-native-navigation';
import {ComponentProvider} from 'react-native';
import {ComponentType} from 'react';
import {ScreenFC} from './types';

/**
 * Util function that wraps Navigation.registerComponent
 * @param screens Array of screen component
 */
export function registerScreens(
  screens: ScreenFC[],
  componentProvider?: (component: ComponentType<any>) => ComponentType<any>,
): ComponentProvider[] {
  return screens.map((screen) => {
    const {screenName} = screen;

    return Navigation.registerComponent(
      screenName,
      () =>
        typeof componentProvider === 'function'
          ? componentProvider(screen as ComponentType<any>)
          : (screen as ComponentType<any>),
      typeof componentProvider === 'function'
        ? () => screen as ComponentType<any>
        : undefined,
    );
  });
}
