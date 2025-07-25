// src/pages/SamplesTable.tsx
import React from 'react';
import { SamplesTableProps } from './SamplesPageUtils';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';

const getStatusBadgeClass = (status: string) => {
  switch (status) {
    case 'Approved':
      return 'bg-success-light text-success';
    case 'Pending':
      return 'bg-warning-light text-warning';
    case 'Rejected':
      return 'bg-error-light text-error';
    default:
      return 'bg-muted-light text-muted';
  }
};

const SamplesTable: React.FC<SamplesTableProps> = ({ samples }) => {
  return (
    <Card className="w-5/6 py-lg m-auto mt-lg">
      <CardContent className="overflow-y-scroll w-full">
        <div className="max-h-80 font-sans px-xs py-md">
          <div className="bg-white rounded-2xl shadow p-md">
            <table className="w-full table-auto">
              <thead>
                <tr className="text-sm text-muted uppercase text-left">
                  <th className="px-md py-sm">ID</th>
                  <th className="px-md py-sm">Status</th>
                  <th className="px-md py-sm">Date</th>
                  <th className="px-md py-sm">Lab</th>
                </tr>
              </thead>
              <tbody>
                {samples.map((sample) => (
                  <tr
                    key={sample.id}
                    className="border-b border-muted-light hover:bg-muted-light/50"
                  >
                    <td className="px-md py-sm text-muted-dark">{sample.id}</td>
                    <td className="px-md py-sm">
                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded-full ${getStatusBadgeClass(
                          sample.status,
                        )}`}
                      >
                        {sample.status}
                      </span>
                    </td>
                    <td className="px-md py-sm text-muted">{sample.date}</td>
                    <td className="px-md py-sm text-muted">{sample.lab}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SamplesTable;
