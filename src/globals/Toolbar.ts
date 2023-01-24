import { GlobalConfig } from 'payload/types';

import { isAdminOrEditor } from '../access';
import { link } from '../fields';

const Toolbar: GlobalConfig = {
  slug: 'toolbar',
  access: {
    read: () => true,
    update: isAdminOrEditor
  },
  fields: [
    {
      name: 'toolbarItems',
      type: 'array',
      fields: [link]
    }
  ]
};

export default Toolbar;
