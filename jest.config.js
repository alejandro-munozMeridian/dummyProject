module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testPathIgnorePatterns: [".d.ts", ".js"] //to ignore js test files
    // setupFiles: ['dotenv/config'],//Now you can access the .env variables in the test cases file.
  };