# Nested Sortable
This is a small library used for creating a sortable nested list.

## NPM package
[@nuttrtools/nested-sortable](https://www.npmjs.com/package/@nuttrtools/nested-sortable)

## Screenshot
![image](https://github.com/nuttrtools/nested-sortable/assets/37809353/48df3748-a22e-4a5a-bd59-a07693edd433)

## Usage
https://github.com/nuttrtools/nested-sortable/blob/f78a8416c35cdad09f38bb161b1d90721fe5f730/src/App.tsx#L31

## Props
### Item Style ([CSSProperties](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/ba3c0017958023b3b6c5fee487acfeda2273fdb9/types/react/v17/index.d.ts#L1558))
Used to style list items
https://github.com/nuttrtools/nested-sortable/blob/f78a8416c35cdad09f38bb161b1d90721fe5f730/src/App.tsx#L7-L9

### Collapsible (Boolean)
used to enable the collapsible option

### Default Items ([TreeItem](https://github.com/nuttrtools/nested-sortable/blob/f78a8416c35cdad09f38bb161b1d90721fe5f730/src/Tree/types.ts#L4-L9)[])
Used to pass the items in the sortable list
#### Structure:
https://github.com/nuttrtools/nested-sortable/blob/f78a8416c35cdad09f38bb161b1d90721fe5f730/src/App.tsx#L11-L27

### Indicator (Boolean)
Used to add a drop indicator

![image](https://github.com/nuttrtools/nested-sortable/assets/37809353/8f9d0710-946c-4068-92a4-b846f7632e14)

### Indentation Width (Number)
Specify indentation for the nested components.

Default is 50

### Removable (Boolean)
Specify whether the removed feature is required or not. 

Default false

### *onOrderChange (Function)
The function triggers when the given list of items changes (either rearranged or removed)

## Start demo
```
git clone https://github.com/nuttrtools/nested-sortable
cd nested-sortable && npm install
npm run dev
```

## Storybook
https://master--5fc05e08a4a65d0021ae0bf2.chromatic.com/?path=/story/examples-tree-sortable--all-features

