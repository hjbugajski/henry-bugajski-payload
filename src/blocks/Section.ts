import {
  AlignFeature,
  BlocksFeature,
  BoldTextFeature,
  HeadingFeature,
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
import { Block } from 'payload/types';

import { richTextFields } from '../fields/link';

import Item from './Item';

export const Section: Block = {
  slug: 'section',
  interfaceName: 'BlockSection',
  fields: [
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: () => [
          HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3'] }),
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
          BlocksFeature({
            blocks: [Item],
          }),
        ],
      }),
    },
  ],
};
