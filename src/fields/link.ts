import { Field } from 'payload/types';

export const link: Field = {
  type: 'row',
  fields: [
    {
      name: 'type',
      type: 'select',
      options: [
        {
          label: 'Internal link',
          value: 'internal'
        },
        {
          label: 'File link',
          value: 'file'
        },
        {
          label: 'External link',
          value: 'external'
        }
      ],
      defaultValue: 'internal',
      required: true,
      admin: {
        width: '100%'
      }
    },
    {
      name: 'newTab',
      label: 'Open in new tab',
      type: 'checkbox',
      admin: {
        width: '100%'
      }
    },
    {
      name: 'internal',
      label: 'Internal',
      type: 'relationship',
      relationTo: 'pages',
      required: true,
      maxDepth: 1,
      admin: {
        width: '100%',
        condition: (_, siblingData) => siblingData?.type === 'internal'
      }
    },
    {
      name: 'file',
      label: 'File',
      type: 'relationship',
      relationTo: 'files',
      required: true,
      maxDepth: 1,
      admin: {
        width: '100%',
        condition: (_, siblingData) => siblingData?.type === 'file'
      }
    },
    {
      name: 'label',
      label: 'Label',
      type: 'text',
      required: true,
      admin: {
        width: '100%',
        condition: (_, siblingData) => siblingData?.type === 'external' || siblingData?.type === 'file'
      }
    },
    {
      name: 'url',
      label: 'External URL',
      type: 'text',
      required: true,
      admin: {
        width: '100%',
        condition: (_, siblingData) => siblingData?.type === 'external'
      }
    }
  ]
};
