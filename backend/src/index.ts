import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

interface Node {
  id: number;
  node: string;
  value: number;
  nodeList?: number[] | Node[];
}

app.get('/nodes', (req: Request, res: Response) => {
  const filePath = path.join(__dirname, 'nodes.json');
  const jsonData: Node[] = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  const sortedData = jsonData.map((node) => {
    if (node.nodeList) {
      node.nodeList = (node.nodeList as number[]).map(
        (id) => jsonData.find((n) => n.id === id)!
      );
    }
    return node;
  });

  res.json(sortedData);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
