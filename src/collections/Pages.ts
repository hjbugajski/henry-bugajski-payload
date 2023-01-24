import { CollectionConfig } from 'payload/types';

import { isAdminOrEditor } from '../access';
import CardSection from '../blocks/CardSection';
import Content from '../blocks/Content';

const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'createdAt', 'updatedAt']
  },
  versions: {
    drafts: true
  },
  access: {
    read: () => true,
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdminOrEditor
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      required: true
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Head',
          fields: [
            {
              name: 'meta',
              type: 'group',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true
                },
                {
                  name: 'description',
                  type: 'textarea',
                  required: true
                }
              ]
            }
          ]
        },
        {
          label: 'Content',
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              required: true,
              blocks: [Content, CardSection]
            }
          ]
        }
      ]
    }
  ]
};

export default Pages;
