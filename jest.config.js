module.exports = {
      // O ambiente de testes deve ser jsdom para testar componentes React
      testEnvironment: 'jest-environment-jsdom',

      // Ignora pastas que não contêm testes, como a do Cypress
      testPathIgnorePatterns: [
        '/node_modules/',
        '/.next/',
        '/cypress/',
        '/.history/'
      ],

      // Configuração para o Jest usar o ts-jest para arquivos .ts(x)
      preset: 'ts-jest',

      // Configuração para importar o setup de testes
      setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    };