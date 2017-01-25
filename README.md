# jQuery simple translator

Simple client-side translator using jQuery, javascript, and a single .json file for all the text.

## Advantages:
* Translation happens client-side: no browser refresh
* All text, in all languages is in a unique `json` file: easier to manage translations (most of all if made by other non-technical people people...) and implement changes to all languages.

## Disadvantages:
* In pages with a lot of text, having all the text in one file can get messy. In this case it's recommended to use separated files, like [this guy did](https://github.com/dakk/jquery-multilang).

## Usage:
* include jQuery 
* include `jquery-simple-translator.js` (after jQuery)
* add a `text_id` tag to every part of your html which includes text
* create a `text.json` file with your text, using as keys the same tags as in `text_id`, appending and underscore + the language code (example: `text_es` for spanish).
* the code automatically detets the language of the user's browser. However, it's good practice to give the user the chance to change it (you never know...). You can do that by making an HTML button or link that calls `populate_textfields(JSONtext, 'language_code')`.

For a full functioning example, check out the `index.html` and `text.json` in this repository, or try it using this [codepen](https://codepen.io/gianlucahmd/pen/MJvzvQ).
