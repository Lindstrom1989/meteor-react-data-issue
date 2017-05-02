import { ListItems } from '../../imports/api/listitems.js';

// let itemsInitial = [
//   {text: 'item 1'},
//   {text: 'item 2'},
//   {text: 'item 3'},
// ];

let success = function() {
  console.log('inserted');
}

if (!ListItems.findOne()) {
  ListItems.insert({text: 'item 1'}, success);
}
