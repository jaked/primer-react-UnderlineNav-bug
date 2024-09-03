import { Box, Button, UnderlineNav } from "@primer/react";
import { useState } from "react";

function App() {
  const [numItems, setNumItems] = useState(3);

  return (
    <Box>
      Count! {numItems}
      <Button onClick={() => setNumItems(numItems + 1)}>Add item</Button>
      <Button onClick={() => setNumItems(numItems - 1)}>Remove item</Button>
      <UnderlineNav aria-label="Items">
        {Array.from({ length: numItems }, (_, i) => (
          <UnderlineNav.Item key={i}>Item {i}</UnderlineNav.Item>
        ))}{" "}
      </UnderlineNav>
    </Box>
  );
}

export default App;
