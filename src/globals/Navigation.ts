import { GlobalConfig } from 'payload/types';

import { hasRole, Role } from '../access';
import { linkArray } from '../fields/link';

const Navigation: GlobalConfig = {
  slug: 'navigation',
  access: {
    read: () => true,
    update: hasRole(Role.Admin, Role.Editor),
  },
  fields: [linkArray],
};

export default Navigation;
