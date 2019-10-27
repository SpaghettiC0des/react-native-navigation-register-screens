import {
  FunctionComponent,
  Component,
  PureComponent,
  ComponentType
} from "react";
import { Options } from "react-native-navigation";
import { ComponentProvider } from "react-native";

/**
 * Passed by react-native-navigation
 */
declare type WithComponentId = { componentId: string };

declare interface ScreenFunctionComponent<P = {}>
  extends FunctionComponent<P & WithComponentId> {
  screenName: string;
  options?: ((props: P) => Options) | Options;
}

interface IScreenName {
  screenName: string;
}

declare class ScreenComponent<P = {}, S = {}, SS = any> extends Component<
  P & WithComponentId,
  S,
  SS
> {
  static screenName: string;
  options?: ((props: P) => Options) | Options;
  componentDidAppear?: () => void;
  componentDidDisappear?: () => void;
  navigationButtonPressed?: ({ buttonId }: { buttonId: string }) => void;
}

declare class ScreenPureComponent<
  P = {},
  S = {},
  SS = any
> extends PureComponent<P & WithComponentId, S, SS> {
  static screenName: string;
  options?: ((props: P) => Options) | Options;
  componentDidAppear?: () => void;
  componentDidDisappear?: () => void;
  navigationButtonPressed?: ({ buttonId }: { buttonId: string }) => void;
}

declare type Screen =
  | ScreenFunctionComponent
  | ScreenComponent
  | ScreenPureComponent;

declare module "react-native-navigation-register-screens" {
  export function registerScreens(
    screens: Screen[],
    prefix: string,
    customComponentProvider: (
      component: ComponentType<any>
    ) => ComponentType<any>
  ): ComponentProvider[];
}
