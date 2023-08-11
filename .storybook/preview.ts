import type { Preview } from '@storybook/react'

import { withThemeFromJSXProvider } from '@storybook/addon-styling'
import { GlobalStyles } from '../src/styles'

const customViewports = {
  default: {
    name: 'default',
    styles: {
      width: '375px',
      height: '963px',
    },
  },
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'primary',
      values: [{ name: 'primary', value: '#FAFAFD' }],
    },
    viewport: { viewports: customViewports, defaultViewport: 'default' },
  },

  decorators: [
    withThemeFromJSXProvider({
      GlobalStyles,
    }),
  ],
}

export default preview
