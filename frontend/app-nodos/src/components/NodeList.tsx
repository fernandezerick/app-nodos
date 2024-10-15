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
      <ul>
        {nodes.map((node) => (
          <li key={node.id}>
            <strong>{node.node}</strong> (Value: {node.value})
            {node.nodeList && (
              <ul>
                {node.nodeList.map((childNode) => (
                  <li key={childNode.id}>
                    <strong>{childNode.node}</strong> (Value: {childNode.value})
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
