module.exports = {
  // 预设的配置
  preset: '@vue/cli-plugin-unit-jest',
  // 收集测试覆盖率 不建议在配置文件设置
  // collectCoverage: true,
  setupFilesAfterEnv: ['./jest.setup.js']
}
