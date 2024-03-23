import path from 'path';

import { webpackBundler } from '@payloadcms/bundler-webpack';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { buildConfig } from 'payload/config';

import Files from './collections/Files';
import Pages from './collections/Pages';
import Users from './collections/Users';
import Navigation from './globals/Navigation';

export default buildConfig({
  admin: {
    bundler: webpackBundler(),
    user: Users.slug,
    livePreview: {
      url: ({ data }) => `${process.env.PAYLOAD_PUBLIC_SITE_URL}${data.slug !== 'home' ? `/${data.slug}` : ''}`,
      collections: ['pages'],
    },
  },
  db: mongooseAdapter({
    url: process.env.MONGODB_URI,
    connectOptions: {
      user: process.env.MONGODB_USERNAME,
      pass: process.env.MONGODB_PASSWORD,
      dbName: process.env.MONGODB_DATABASE,
    },
  }),
  editor: lexicalEditor({}),
  collections: [Files, Pages, Users],
  globals: [Navigation],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  cors: [process.env.MONGODB_IP, ...(process.env.DOMAINS?.split(' ') ?? [])].filter(Boolean),
  csrf: [process.env.SERVER_URL, ...(process.env.DOMAINS?.split(' ') ?? [])].filter(Boolean),
  serverURL: process.env.SERVER_URL,
});
