import {
  Component,
  ComponentType,
  FC,
  PureComponent,
  FunctionComponent
} from "react";
import { ComponentProvider } from "react-native";
import { Options } from "react-native-navigation";

/**
 * Passed by react-native-navigation
 */
declare type WithComponentId = { componentId: string };

declare type ScreenOptions<P> = ((props: P) => Options) | Options;

declare type ScreenComponentStaticMembers<P> = {
  screenName: string;
  options?: ScreenOptions<P>;
};

declare type ScreenFunctionComponent<P = {}> = FunctionComponent<
  P & WithComponentId
> &
  ScreenComponentStaticMembers<P & WithComponentId>;

declare type ScreenFC<P = {}> = FC<P & WithComponentId> &
  ScreenComponentStaticMembers<P & WithComponentId>;

declare type ScreenSFC<P = {}> = FC<P & WithComponentId> &
  ScreenComponentStaticMembers<P & WithComponentId>;

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
  | ScreenFC
  | ScreenComponent
  | ScreenPureComponent;

declare module "react-native-navigation-register-screens" {
  export default function registerScreens(
    screens: Screen[],
    prefix?: string,
    customComponentProvider?: (
      component: ComponentType<any>
    ) => ComponentType<any>
  ): ComponentProvider[];
}
