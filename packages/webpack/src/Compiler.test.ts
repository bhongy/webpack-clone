import Compiler from './Compiler';

test('Compiler', () => {
  const compiler = new Compiler();
  expect(compiler.name).toEqual('webpack.Compiler');
});
