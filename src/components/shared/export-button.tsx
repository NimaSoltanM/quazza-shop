'use client';
import { useState } from 'react';
import { File } from 'lucide-react';
import { Button } from '../ui/button';

interface ExportButtonProps {
  data: Record<string, any>[];
  filename?: string;
}

export default function ExportButton({
  data,
  filename = 'export.csv',
}: ExportButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const exportToCSV = () => {
    setIsLoading(true);
    const csvData = generateCSV(data);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
    const link = document.createElement('a');
    link.setAttribute('href', URL.createObjectURL(blob));
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsLoading(false);
  };

  const generateCSV = (data: Record<string, any>[]) => {
    const headers = Object.keys(data[0]);
    const rows = data.map((row) =>
      headers.map((header) => row[header] ?? '').join(',')
    );
    const csvData = [headers.join(','), ...rows].join('\n');
    return csvData;
  };

  return (
    <Button
      size='sm'
      variant='outline'
      className='h-7 gap-1 text-sm'
      onClick={exportToCSV}
      disabled={isLoading}>
      {isLoading ? (
        <span>Downloading...</span>
      ) : (
        <>
          <File className='h-3.5 w-3.5' />
          <span className='sr-only sm:not-sr-only'>Export</span>
        </>
      )}
    </Button>
  );
}
