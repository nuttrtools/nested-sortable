import { NestedSortable } from "./Tree/NestedSortable"

function App() {

  return (
    <>
      <NestedSortable collapsible onOrderChange={(newItems) => console.log(newItems)}/>
    </>
  )
}

export default App
