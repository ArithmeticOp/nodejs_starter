const args = require('minimist')(process.argv.slice(2))
console.log(args['name'])

// node index.js --name=mine
// node index.js --name=mine -abc --d=ef g h t
console.log(args)