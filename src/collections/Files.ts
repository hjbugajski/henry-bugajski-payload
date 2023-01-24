import path from 'path';

import { CollectionConfig } from 'payload/types';

import { isAdminOrEditor } from '../access';

const Files: CollectionConfig = {
  slug: 'files',
  access: {
    read: () => true,
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdminOrEditor
  },
  admin: {
    useAsTitle: 'filename',
    group: 'Content'
  },
  upload: {
    staticDir: path.resolve(__dirname, '../../files'),
    mimeTypes: ['application/pdf']
  },
  fields: []
};

export default Files;
