import { CollectionConfig } from 'payload/types';

import { hasRole, hasRoleField, hasRoleOrSelf, hasRoleOrSelfField, Role } from '../access';

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
    group: 'Admin',
    defaultColumns: ['email', 'roles', 'id'],
  },
  access: {
    create: hasRole(Role.Admin),
    read: hasRoleOrSelf(Role.Admin),
    update: hasRoleOrSelf(Role.Admin),
    delete: hasRole(Role.Admin),
  },
  fields: [
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      defaultValue: [Role.Editor],
      required: true,
      access: {
        read: hasRoleOrSelfField(Role.Admin),
        update: hasRoleField(Role.Admin),
      },
      options: Object.keys(Role).map((key) => Role[key]),
    },
  ],
};

export default Users;
