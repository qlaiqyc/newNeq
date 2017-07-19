import Library from './library';
console.log("1dasasd")

console.log(module);
if (module.hot) {
  module.hot.accept('./library', function() {
    console.log('Accepting the updated library module!');
    Library.log();
  })
}