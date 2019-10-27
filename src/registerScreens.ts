import { Navigation } from "react-native-navigation";
import { ComponentProvider } from "react-native";
import { ComponentType } from "react";
import { Screen, IScreenName } from "..";

/**
 * Util function that wraps Navigation.registerComponent
 * @param screens Array of screen component
 * @param prefix Screen name prefix, usually this is the App name
 */
function registerScreens(
  screens: Screen[],
  prefix?: string,
  customComponentProvider?: (component: ComponentType<any>) => ComponentType<any>
): ComponentProvider[] {
  return screens.map(screen => {
    const s = screen as IScreenName;
    const screenName = (s.screenName = `${prefix ? `${prefix}.` : prefix}${
      s.screenName
    }`);
    return Navigation.registerComponent(
      screenName,
      () =>
        // @ts-ignore FIXME! Ignore ComponentType<any> errors for now
        customComponentProvider ? customComponentProvider(s) : screen,
      // @ts-ignore Type '() => IScreenName' is not assignable to type 'ComponentProvider'.
      customComponentProvider ? () => s : undefined
    );
  });
}

export default registerScreens;
