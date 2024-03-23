import path from 'path';

import { CollectionConfig } from 'payload/types';

import { hasRole, hasRoleOrPublished, Role } from '../access';

const Files: CollectionConfig = {
  slug: 'files',
  versions: {
    drafts: true,
  },
  access: {
    read: hasRoleOrPublished(Role.Admin, Role.Editor),
    create: hasRole(Role.Admin, Role.Editor),
    update: hasRole(Role.Admin, Role.Editor),
    delete: hasRole(Role.Admin),
  },
  admin: {
    useAsTitle: 'filename',
    group: 'Content',
  },
  upload: {
    staticDir: path.resolve(__dirname, '../../files'),
    mimeTypes: ['application/pdf'],
  },
  fields: [],
};

export default Files;
