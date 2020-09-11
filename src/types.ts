import {FunctionComponent} from 'react';
import {Options} from 'react-native-navigation';

export type ScreenProps<P> = P & {
  componentId: string;
};

export type ScreenOptions<P> = ((props: P) => Options) | Options;

export interface WithScreenName {
  screenName: string;
}

export interface ScreenComponentStaticMembers<P> extends WithScreenName {
  options?: ScreenOptions<ScreenProps<P>>;
}

export interface ScreenFunctionComponent<P = {}>
  extends FunctionComponent<ScreenProps<P>>,
    ScreenComponentStaticMembers<ScreenProps<P>> {}

export type ScreenFC<P = {}> = ScreenFunctionComponent<P>;
