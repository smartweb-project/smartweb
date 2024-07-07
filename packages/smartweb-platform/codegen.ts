/* eslint-disable import/no-extraneous-dependencies */
import { type CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: '../../packages/smartweb-backend/*.gql',
  documents: ['src/**/*.graphql'],
  generates: {
    './src/helpers/backend/gen/': {
      preset: 'client',
      presetConfig: {
        persistedDocuments: 'string',
      },
    },
  },
};

export default config;
