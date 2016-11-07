const $ = require('jquery');
const EmojiGenerator = require('./emoji-generator');

class ThemeSuggester {
  constructor() {
    this.generator = new EmojiGenerator();
  }

  attachToDom() {
    this.button = $('.regenerate');
    this.output = $('.emoji');
    this.setupEventListeners();
    this.render();
  }

  setupEventListeners() {
    this.button.on('click', this.render.bind(this));
  }

  render() {
    this.output.html(this.generator.sentence());
  }
}

module.exports = ThemeSuggester;
