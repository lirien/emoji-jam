const emoji = require('emojilib');
const defaultCategories = [
  'people',
  'animals_and_nature',
  'food_and_drink',
  'activity',
  'travel_and_places',
  'objects'
];

class EmojiGenerator {
  constructor({ categories } = { categories: defaultCategories }) {
    this.eligibleKeys = emoji.ordered.filter((key) => {
      return categories.includes(emoji.lib[key].category);
    });
  }

  emoji() {
    return emoji.lib[
      this.eligibleKeys[Math.floor(Math.random() * this.eligibleKeys.length)]
    ].char;
  }

  sentence({ length } = { length: 3 }) {
    return new Array(length).fill().map(() => this.emoji()).join('');
  }
}

module.exports = EmojiGenerator;
