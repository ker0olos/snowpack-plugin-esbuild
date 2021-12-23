# snowpack-plugin-esbuild

```
npm install snowpack-plugin-esbuild --save-dev
```

```js
// snowpack.config.mjs
{
  plugins: [
    // ...
    [
      'snowpack-plugin-esbuild',
      {
        input: ['.js', '.mjs', '.jsx', '.ts', '.tsx'],
        // https://esbuild.github.io/api/#simple-options
        options: {
          loader: 'jsx'
          target: [ 'es6' ]
        }
      }
    ]
  ]
}
```