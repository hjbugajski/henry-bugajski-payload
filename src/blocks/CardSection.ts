import { Block } from 'payload/types';

import { blockFields } from '../fields';
import { card } from '../fields/card';

const CardSection: Block = {
  slug: 'cardSection',
  fields: [
    blockFields({
      name: 'cardSectionFields',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true
        },
        {
          name: 'cards',
          type: 'array',
          required: true,
          fields: [card]
        }
      ]
    })
  ]
};

export default CardSection;
