import { Block } from 'payload/types';

import { blockFields } from '../fields';

const Content: Block = {
  slug: 'content',
  fields: [
    blockFields({
      name: 'contentFields',
      fields: [
        {
          name: 'content',
          label: 'Content',
          type: 'richText',
          admin: {
            elements: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ol', 'ul']
          }
        }
      ]
    })
  ]
};

export default Content;
