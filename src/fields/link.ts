import { Field } from 'payload/types';

import RowLabel from '../components/RowLabel';

export const richTextFields: Field[] = [
  {
    name: 'anchor',
    type: 'text',
    admin: {
      condition: (_, siblingData) => siblingData?.linkType === 'internal',
    },
  },
  {
    name: 'rel',
    label: 'Rel Attribute',
    type: 'select',
    hasMany: true,
    options: ['noopener', 'noreferrer', 'nofollow'],
    admin: {
      condition: (_, siblingData) => siblingData?.linkType === 'custom',
    },
  },
  {
    type: 'row',
    fields: [
      {
        name: 'umamiEvent',
        type: 'text',
        admin: {
          width: '50%',
        },
      },
      {
        name: 'umamiEventId',
        label: 'Umami Event ID',
        type: 'text',
        admin: {
          width: '50%',
        },
      },
    ],
  },
];

const fields: Field[] = [
  {
    name: 'text',
    type: 'text',
    required: true,
  },
  {
    name: 'type',
    type: 'radio',
    required: true,
    defaultValue: 'internal',
    options: [
      {
        label: 'Internal',
        value: 'internal',
      },
      {
        label: 'File',
        value: 'file',
      },
      {
        label: 'External',
        value: 'external',
      },
    ],
  },
  {
    name: 'page',
    type: 'relationship',
    relationTo: 'pages',
    required: true,
    maxDepth: 1,
    admin: {
      condition: (_, siblingData) => siblingData?.type === 'internal',
      width: '50%',
    },
  },
  {
    name: 'file',
    type: 'relationship',
    relationTo: 'files',
    required: true,
    maxDepth: 1,
    admin: {
      condition: (_, siblingData) => siblingData?.type === 'file',
      width: '50%',
    },
  },
  {
    type: 'row',
    fields: [
      {
        name: 'url',
        label: 'External URL',
        type: 'text',
        required: true,
        admin: {
          condition: (_, siblingData) => siblingData?.type === 'external',
          width: '50%',
        },
      },
      {
        name: 'rel',
        label: 'Rel Attribute',
        type: 'select',
        hasMany: true,
        options: ['noopener', 'noreferrer', 'nofollow'],
        admin: {
          condition: (_, siblingData) => siblingData?.type === 'external',
          width: '50%',
        },
      },
    ],
  },
  {
    name: 'newTab',
    label: 'Open in new tab',
    type: 'checkbox',
    defaultValue: false,
  },
  {
    type: 'row',
    fields: [
      {
        name: 'umamiEvent',
        type: 'text',
        admin: {
          width: '50%',
        },
      },
      {
        name: 'umamiEventId',
        label: 'Umami Event ID',
        type: 'text',
        admin: {
          width: '50%',
        },
      },
    ],
  },
];

export const linkGroup: Field = {
  name: 'link',
  type: 'group',
  interfaceName: 'FieldLinkGroup',
  fields,
};

export const linkArray: Field = {
  name: 'links',
  type: 'array',
  admin: {
    components: {
      RowLabel: RowLabel('text', 'Link'),
    },
  },
  interfaceName: 'FieldLinkArray',
  fields,
};
