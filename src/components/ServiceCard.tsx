
import React, { useState } from 'react';
import { Link as LinkIcon } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';

interface Example {
  title: string;
  description: string;
  url: string;
  clicks: number;
}

interface ServiceCardProps {
  title: string;
  description: string;
  examples: Example[];
  color: string;
  accentColor: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  examples,
  color,
  accentColor
}) => {
  const [exampleClicks, setExampleClicks] = useState(
    examples.reduce((acc, example, index) => ({
      ...acc,
      [index]: example.clicks
    }), {} as Record<number, number>)
  );

  const handleLinkClick = (index: number) => {
    setExampleClicks(prev => ({
      ...prev,
      [index]: prev[index] + 1
    }));
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover-scale">
      <h3 className="text-2xl font-bold text-card-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground mb-2 leading-relaxed">{description}</p>
      
      <Table>
        {/* <TableHeader>
          <TableRow>
            <TableHead className="text-left">Name</TableHead>
            <TableHead className="text-left">Description</TableHead>
            <TableHead className="text-left">Clicks</TableHead>
          </TableRow>
        </TableHeader> */}
        <TableBody>
          {examples.map((example, index) => (
            <TableRow key={index}>
              <TableCell className="text-left" style={{"width": "350px"}}>
                <a 
                  href={example.url}
                  onClick={() => handleLinkClick(index)}
                  className="text-blueCustom hover:text-blueCustomDark font-mono text-xs underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {example.title}
                </a>
              </TableCell>
              <TableCell className="text-left" style={{"width": "550px"}}>
                <span className="font-mono text-blueCustom text-xs">
                  {example.description}
                </span>
              </TableCell>
              <TableCell className="text-right">
                <span className="bg-greenCustomLight text-greenCustom px-1 py-0.5 rounded text-xs font-semibold">
                  {exampleClicks[index]}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ServiceCard;
