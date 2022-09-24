# @polym/story-cssdata (alpha version)

This is a story definition utility for React components with CSS property control props.

You can get rid of the tedious argTypes definition with a single line of spread syntax!

## WARNING

This package is under development.

There are still some CSS properties that have not been documented.

## Install

```
npm i --save-dev @polym/story-cssdata
```

or

```
yarn add -D @polym/story-cssdata
```

## Usage

For example, `{...desc_CSS.height}` would be expanded as follows

```ts
{
  height: {
    "control": {
      "type": "text"
    },
    "options": [],
    "description": "Height of element",
    "table": {
      "category": "style",
      "subcategory": "Box Model",
      "type": {
        "summary": null
      },
      "defaultValue": {
        "detail": "auto"
      }
    }
  },
}
```

The actual `*.stories.*` file could use this.

```ts
import { desc_CSS } from '@polym/story-cssdata'

export default {
  title: 'MyComponent',
  component: MyComponent,
  parameters: {
    docs: {
      description: {
        component: 'this is original component'
      }
    }
  },
  argTypes: {
    // If the props name is 'height' and you adopt the default argType provided by this library
    ...desc_CSS.height,

    // If the props name is different from the CSS property or if you want to customize the content
    paddingValue: {
    ...desc_CSS.padding,
    control: {
      type: 'number'
    },
    description: 'custom description',
    table: {
      // Use CSS property classifications as categories
      ...desc_CSS.padding.table,
      defaultValue: {
        summary: 0, // my default value
        details: null
      }
    }
  },
}
```

To see what structure the resulting argTypes object has, [click here](https://github.com/tetracalibers/polym-story-cssdata/blob/main/src/data/css-prop-doc.json).
