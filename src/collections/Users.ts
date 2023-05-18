import { CollectionConfig } from 'payload/types';

import { isAdmin, isAdminFieldLevel, isAdminOrSelf, isAdminOrSelfFieldLevel } from '../access';

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
    group: 'Admin'
  },
  access: {
    create: isAdmin,
    read: isAdminOrSelf,
    update: isAdminOrSelf,
    delete: isAdmin
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'firstName',
          type: 'text',
          required: false
        },
        {
          name: 'lastName',
          type: 'text',
          required: false
        }
      ]
    },
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      defaultValue: ['public'],
      required: true,
      access: {
        read: isAdminOrSelfFieldLevel,
        create: isAdminFieldLevel,
        update: isAdminFieldLevel
      },
      options: ['admin', 'editor', 'public']
    }
  ]
};

export default Users;
