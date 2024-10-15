import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const port = 3000;

app.get('/nodes', (req, res) => {
  const filePath = path.join(__dirname, 'data', 'nodes.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return res.status(500).json({ error: 'Error reading the file' });
    }

    try {
      const nodes = JSON.parse(data);
      
      const transformedNodes = transformNodes(nodes);

      return res.json(transformedNodes);
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError);
      return res.status(500).json({ error: 'Error parsing JSON' });
    }
  });
});

//Funcion que transforma los nodos
function transformNodes(nodes: any[]) {
  const nodeMap = new Map<number, any>();

  nodes.forEach((node) => {
    nodeMap.set(node.id, node);
  });

  nodes.forEach((node) => {
    if (node.nodeList) {
      node.nodeList = node.nodeList.map((id: number) => nodeMap.get(id));
    }
  });

  return nodes;
}

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
