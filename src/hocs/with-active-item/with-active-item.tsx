import * as React from "react";
import {Subtract} from "utility-types";
import {Film} from "../../types";

interface State {
  activeItem?: Film;
}

interface InjectingProps {
  activeItem: Film;
  onActiveItemChange: () => void;
}

const withActiveItem = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;
  class WithActiveItem extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: this.props.activeItem
      };

      this._onActiveItemChange = this._onActiveItemChange.bind(this);
    }

    _onActiveItemChange(item) {
      this.setState({
        activeItem: item
      });
    }

    render() {
      const {activeItem} = this.state;
      return (
        <Component
          {...this.props}
          activeItem={activeItem}
          onActiveItemChange={this._onActiveItemChange}
        />
      );
    }
  }
  return WithActiveItem;
};

export default withActiveItem;
