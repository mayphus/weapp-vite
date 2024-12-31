import { TemplateName } from '../src/enums'

export const Templates = [
  {
    target: 'weapp-vite-template',
    dest: TemplateName.default,
  },
  {
    target: 'weapp-vite-tailwindcss-template',
    dest: TemplateName.tailwindcss,
  },
  {
    target: 'weapp-vite-tailwindcss-tdesign-template',
    dest: TemplateName.tdesign,
  },
  {
    target: 'weapp-vite-tailwindcss-vant-template',
    dest: TemplateName.vant,
  },
]
