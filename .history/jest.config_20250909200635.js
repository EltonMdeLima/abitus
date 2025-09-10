module.exports = {
  // O ambiente de testes deve ser jsdom para testar componentes React
  testEnvironment: 'jest-environment-jsdom',

  // Ignora pastas que não contêm testes
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],

  // Mapeia os caminhos de importação do seu projeto (se necessário)
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
  },

  // Configuração para o Jest usar o ts-jest para arquivos .ts(x)
  preset: 'ts-jest',

  // Configuração para importar o setup de testes que inclui 'expect(...).toBeInTheDocument'
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};