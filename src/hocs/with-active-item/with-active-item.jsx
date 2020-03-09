import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
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

  WithActiveItem.propTypes = {
    activeItem: PropTypes.object
  };

  return WithActiveItem;
};

export default withActiveItem;
