import path from 'path';

import { buildConfig } from 'payload/config';

import Files from './collections/Files';
import Pages from './collections/Pages';
import Users from './collections/Users';
import Toolbar from './globals/Toolbar';

export default buildConfig({
  admin: {
    user: Users.slug
  },
  collections: [Files, Pages, Users],
  globals: [Toolbar],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql')
  },
  cors: [process.env.MONGODB_IP].filter(Boolean)
});
