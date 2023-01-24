import { Field } from 'payload/types';

import { link } from './link';

export const card: Field = {
  type: 'row',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        width: '100%'
      }
    },
    {
      name: 'color',
      type: 'select',
      options: [
        {
          label: 'Blue',
          value: 'blue'
        },
        {
          label: 'Teal',
          value: 'teal'
        },
        {
          label: 'Tomato',
          value: 'tomato'
        },
        {
          label: 'Plum',
          value: 'plum'
        },
        {
          label: 'Violet',
          value: 'violet'
        }
      ],
      admin: {
        width: '100%'
      }
    },
    {
      name: 'links',
      type: 'array',
      required: true,
      fields: [link],
      admin: {
        width: '100%'
      }
    },
    {
      name: 'tags',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
          admin: {
            width: '100%'
          }
        }
      ],
      admin: {
        width: '100%'
      }
    },
    {
      name: 'body',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'content',
          type: 'textarea',
          required: true,
          admin: {
            width: '100%'
          }
        }
      ],
      admin: {
        width: '100%'
      }
    },
    {
      name: 'footer',
      type: 'text',
      required: true,
      admin: {
        width: '100%'
      }
    }
  ]
};
