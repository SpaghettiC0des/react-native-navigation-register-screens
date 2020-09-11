import {PureComponent} from 'react';
import {ScreenOptions} from './types';

export class ScreenPureComponent<
  P = {},
  S = any,
  SS = any
> extends PureComponent<P, S, SS> {
  constructor(props: P) {
    super(props);
  }

  static screenName: string;
  options?: ScreenOptions<P>;
  componentDidAppear() {}
  componentDidDisappear() {}
  navigationButtonPressed?: ({buttonId}: {buttonId: string}) => void;
}
