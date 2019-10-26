import { FunctionComponent } from 'react';
import { Options } from 'react-native-navigation';

/**
 * Passed by react-native-navigation
 */
declare type WithComponentId = { componentId: string };

declare interface ScreenFunctionComponent<P = {}>
  extends FunctionComponent<P & WithComponentId> {
  screenName: string;
  options?: ((props: P) => Options) | Options;
}
