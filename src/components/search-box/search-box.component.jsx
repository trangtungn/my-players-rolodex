import { Component } from 'react';
import './search-box.styles.css';

class SearchBox extends Component {
  render() {
    return (
      <input
        className={`search-box ${this.props.searchClassName}`}
        type="search"
        placeholder={this.props.searchPlaceholder}
        onChange={this.props.onSearchChangeHandler}
      />
    );
  }
}

export default SearchBox;
