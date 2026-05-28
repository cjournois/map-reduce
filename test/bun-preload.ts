const lifecycle = process.env.npm_lifecycle_script ?? ''
const argvHasCoverage = process.argv.includes('--coverage')

if (lifecycle.includes('--coverage') || argvHasCoverage || process.env.BUN_TEST_PRELOAD_SRC === '1') {
  const glob = new Bun.Glob('src/**/*.ts')
  for (const file of glob.scanSync('.')) {
    await import(`../${file}`)
  }
}
