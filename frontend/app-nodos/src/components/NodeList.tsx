import { useEffect, useState } from 'react';

interface Node {
  id: number;
  node: string;
  value: number;
  nodeList?: Node[];
}

function App() {
  const [nodes, setNodes] = useState<Node[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/nodes')
      .then((response) => response.json())
      .then((data) => setNodes(data))
      .catch((error) => console.error('Error fetching nodes:', error));
  }, []);

  return (
    <div>
      <h1>Nodes</h1>
      <pre>{JSON.stringify(nodes, null, 2)}</pre>
    </div>
  );
}

export default App;
