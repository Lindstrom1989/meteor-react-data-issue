import { Meteor } from 'meteor/meteor';
import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import CollectionList from './CollectionList.jsx';
import { ListItems } from '../../imports/api/listitems.js';


export default createContainer((props) => {
  const subscription = Meteor.subscribe('listitems');
  const loading = !subscription.ready();
  const list = ListItems.find().fetch();
  const listExists = !loading && !!list;
  console.log('collection');
  console.log(list);
  return {
    list: list,
    listExists,
  };
}, CollectionList);
