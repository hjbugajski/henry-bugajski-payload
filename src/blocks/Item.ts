import {
  AlignFeature,
  BoldTextFeature,
  ItalicTextFeature,
  lexicalEditor,
  LinkFeature,
  OrderedListFeature,
  ParagraphFeature,
  StrikethroughTextFeature,
  SubscriptTextFeature,
  SuperscriptTextFeature,
  UnderlineTextFeature,
  UnorderedListFeature,
} from '@payloadcms/richtext-lexical';
import { Block, Field } from 'payload/types';

import RowLabel from '../components/RowLabel';
import { linkGroup, richTextFields } from '../fields/link';
import { deepMerge } from '../utils/deepMerge';

const Item: Block = {
  slug: 'item',
  interfaceName: 'BlockItem',
  fields: [
    {
      name: 'size',
      type: 'radio',
      required: true,
      defaultValue: 'default',
      options: [
        {
          label: 'Default',
          value: 'default',
        },
        {
          label: 'Large',
          value: 'large',
        },
      ],
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'hasLink',
      type: 'checkbox',
      defaultValue: false,
    },
    deepMerge<Field>(linkGroup, {
      admin: {
        condition: (_, siblingData) => siblingData.hasLink,
      },
    }),
    {
      name: 'hasBadge',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'badge',
      type: 'group',
      admin: {
        condition: (_, siblingData) => siblingData.hasBadge,
      },
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
        {
          name: 'color',
          type: 'select',
          defaultValue: 'gray',
          required: true,
          options: [
            {
              label: 'Gray',
              value: 'gray',
            },
            {
              label: 'Blue',
              value: 'blue',
            },
            {
              label: 'Red',
              value: 'red',
            },
            {
              label: 'Amber',
              value: 'amber',
            },
            {
              label: 'Green',
              value: 'green',
            },
            {
              label: 'Teal',
              value: 'teal',
            },
            {
              label: 'Purple',
              value: 'purple',
            },
            {
              label: 'Pink',
              value: 'pink',
            },
          ],
        },
      ],
    },
    {
      name: 'tags',
      type: 'array',
      required: true,
      admin: {
        components: {
          RowLabel: RowLabel('icon', 'Tag'),
        },
      },
      fields: [
        {
          name: 'icon',
          type: 'select',
          required: true,
          options: [
            {
              label: 'Arrow Up Right Small',
              value: 'arrowUpRightSmall',
            },
            {
              label: 'Briefcase',
              value: 'briefcase',
            },
            {
              label: 'Clock',
              value: 'clock',
            },
            {
              label: 'Code',
              value: 'code',
            },
            {
              label: 'Globe',
              value: 'globe',
            },
            {
              label: 'Servers',
              value: 'servers',
            },
          ],
        },
        {
          name: 'type',
          type: 'select',
          required: true,
          options: [
            {
              label: 'Text',
              value: 'text',
            },
            {
              label: 'Date',
              value: 'date',
            },
            {
              label: 'Date Range',
              value: 'dateRange',
            },
          ],
        },
        {
          name: 'text',
          type: 'text',
          hasMany: true,
          required: true,
          admin: {
            condition: (_, siblingData) => siblingData.type === 'text',
          },
        },
        {
          name: 'date',
          type: 'date',
          required: true,
          admin: {
            condition: (_, siblingData) => siblingData.type === 'date',
          },
        },
        {
          name: 'dateRange',
          type: 'group',
          admin: {
            condition: (_, siblingData) => siblingData.type === 'dateRange',
          },
          fields: [
            {
              name: 'startDate',
              type: 'date',
              required: true,
            },
            {
              name: 'endDate',
              type: 'date',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: () => [
          ParagraphFeature(),
          BoldTextFeature(),
          ItalicTextFeature(),
          UnderlineTextFeature(),
          StrikethroughTextFeature(),
          UnorderedListFeature(),
          OrderedListFeature(),
          SuperscriptTextFeature(),
          SubscriptTextFeature(),
          AlignFeature(),
          LinkFeature({ fields: richTextFields }),
        ],
      }),
    },
  ],
};

export default Item;
