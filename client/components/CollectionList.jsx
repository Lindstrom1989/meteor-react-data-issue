import React from 'react';
import PropTypes from 'prop-types';
import { ListItems } from '../../imports/api/listitems.js';


export default class CollectionList extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
  }

  componentWillUpdate() {
    console.log(this.props);
  }

  addItem() {
    ListItems.insert({text: 'new item'});
  }

  render() {
    return (
      <div>
        <button onClick={this.addItem}>Add Item</button>
        <ul>
          {this.props.list.map(listItem => {
            <li>{listItem.text}</li>
          })}
        </ul>
      </div>
    );
  }
}


CollectionList.propTypes = {
  list: PropTypes.array,
};
