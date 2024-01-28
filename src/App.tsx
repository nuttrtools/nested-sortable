import { CSSProperties } from "react"
import { NestedSortable } from "./Tree/NestedSortable"
import { TreeItems } from "./Tree/types";

function App() {

  const itemStyle: CSSProperties = {
    padding: 0
  }

  const items: TreeItems = [
    {
      id: 'id1',
      name: 'Home',
      children: [],
    },
    {
      id: 'id2',
      name: 'Collections',
      children: [
        {id: 'id3', name: 'Spring', children: []},
        {id: 'id4', name: 'Summer', children: []},
        {id: 'id5', name: 'Fall', children: []},
        {id: 'id6', name: 'Winter', children: []},
      ],
    },
  ];

  return (
    <>
      <NestedSortable itemClicked={(id: string) => console.log(id)} removable defaultItems={items} collapsible onOrderChange={(newItems) => console.log(newItems)} itemStyle={itemStyle}/>
    </>
  )
}

export default App
