const emoji = require('emojilib');
const categories = [
  'people',
  'animals_and_nature',
  'food_and_drink',
  'activity',
  'travel_and_places',
  'objects'
];
let eligibleKeys = emoji.ordered.filter(key => categories.includes(emoji.lib[key].category));
console.log(emoji.lib[eligibleKeys[Math.floor(Math.random() * eligibleKeys.length)]].char);
