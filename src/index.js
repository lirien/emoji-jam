const $ = require('jquery');
const ThemeSuggester = require('./theme-suggester');

window.suggester = new ThemeSuggester();
$(window.suggester.attachToDom.bind(window.suggester));
