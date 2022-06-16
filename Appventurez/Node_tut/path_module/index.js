const path = require('path');
console.log(path.dirname('C:/Users/admin/Desktop/appventurez/Appventurez/Node_tut/path_module/index.js'))// gives you path
console.log(path.extname('C:/Users/admin/Desktop/appventurez/Appventurez/Node_tut/path_module/index.js'))// gives you .js
console.log(path.basename('C:/Users/admin/Desktop/appventurez/Appventurez/Node_tut/path_module/index.js'))// gives you index.js

console.log(path.parse('C:/Users/admin/Desktop/appventurez/Appventurez/Node_tut/path_module/index.js'));
// {
// root: 'C:/',
// dir: 'C:/Users/admin/Desktop/appventurez/Appventurez/Node_tut/path_module',
// base: 'index.js',
// ext: '.js',
// name: 'index'
// }

const myPath =  path.parse('C:/Users/admin/Desktop/appventurez/Appventurez/Node_tut/path_module/index.js');
console.log(myPath.name); //index 


