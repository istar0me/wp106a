var M = module.exports = {}

var marked = require('marked');
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

console.log(`[test]
before : I am using __markdown__.
after : ${marked('I am using __markdown__.')}`);

M.md2html = function() {
  var md = document.getElementById('md')
  var html = document.getElementById('html')
  // html.value = marked(md.value)
  html.innerHTML = marked(md.value)
  // console.log('test2')
  // console.log(md.value)
}

// M.test = function() {
//   console.log('test')
// }