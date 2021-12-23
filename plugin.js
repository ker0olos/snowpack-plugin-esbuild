const fs = require('fs/promises')
const esbuild = require('esbuild')

module.exports = function plugin(_, { input, options } = {})
{
  if (input?.length <= 0)
    throw new Error(`options.input must specify at least one filetype`)

  return {
    name: 'snowpack-plugin-esbuild',
    resolve: {
      input: options.input || ['.js', '.mjs', '.jsx', '.ts', '.tsx'],
      output: ['.js'],
    },
    async load({ filePath })
    {
      if (!filePath)
        return;

      const { code } = await esbuild.transform(await fs.readFile(filePath, 'utf8'), {
        ...options
      });

      if (!code)
        return;

      return { '.js': { code: code.replace(/process\.env/g, 'import.meta.env') } }
    },
  }
}