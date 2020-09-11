import {Component} from 'react';
import {ScreenOptions} from './types';

export class ScreenComponent<P = {}, S = any, SS = any> extends Component<
  P,
  S,
  SS
> {
  constructor(props: P) {
    super(props);
  }

  static screenName: string;
  options?: ScreenOptions<P>;
  componentDidAppear() {}
  componentDidDisappear() {}
  navigationButtonPressed?: ({buttonId}: {buttonId: string}) => void;
}
