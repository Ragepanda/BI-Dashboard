import { ChartConfig } from '@/components/ui/chart';

export const samples = [
  { id: 'SMP-001', status: 'Approved', date: '2025-07-01', lab: 'Lab 1' },
  { id: 'SMP-002', status: 'Pending', date: '2025-07-01', lab: 'Lab 2' },
  { id: 'SMP-003', status: 'Rejected', date: '2025-07-01', lab: 'Lab 3' },
  { id: 'SMP-004', status: 'Approved', date: '2025-07-02', lab: 'Lab 1' },
  { id: 'SMP-005', status: 'Pending', date: '2025-07-02', lab: 'Lab 2' },
  { id: 'SMP-006', status: 'Rejected', date: '2025-07-03', lab: 'Lab 3' },
  { id: 'SMP-007', status: 'Approved', date: '2025-07-03', lab: 'Lab 1' },
  { id: 'SMP-008', status: 'Pending', date: '2025-07-04', lab: 'Lab 2' },
  { id: 'SMP-009', status: 'Rejected', date: '2025-07-04', lab: 'Lab 3' },
  { id: 'SMP-010', status: 'Approved', date: '2025-07-05', lab: 'Lab 1' },
  { id: 'SMP-011', status: 'Pending', date: '2025-07-05', lab: 'Lab 2' },
  { id: 'SMP-012', status: 'Rejected', date: '2025-07-05', lab: 'Lab 3' },
  { id: 'SMP-013', status: 'Approved', date: '2025-07-06', lab: 'Lab 1' },
  { id: 'SMP-014', status: 'Pending', date: '2025-07-07', lab: 'Lab 2' },
  { id: 'SMP-015', status: 'Rejected', date: '2025-07-07', lab: 'Lab 3' },
  { id: 'SMP-016', status: 'Approved', date: '2025-07-08', lab: 'Lab 1' },
  { id: 'SMP-017', status: 'Pending', date: '2025-07-08', lab: 'Lab 2' },
  { id: 'SMP-018', status: 'Rejected', date: '2025-07-09', lab: 'Lab 3' },
  { id: 'SMP-019', status: 'Approved', date: '2025-07-09', lab: 'Lab 1' },
  { id: 'SMP-020', status: 'Pending', date: '2025-07-10', lab: 'Lab 2' },
  { id: 'SMP-021', status: 'Rejected', date: '2025-07-10', lab: 'Lab 3' },
  { id: 'SMP-022', status: 'Approved', date: '2025-07-11', lab: 'Lab 1' },
  { id: 'SMP-023', status: 'Pending', date: '2025-07-11', lab: 'Lab 2' },
  { id: 'SMP-024', status: 'Rejected', date: '2025-07-12', lab: 'Lab 3' },
  { id: 'SMP-025', status: 'Approved', date: '2025-07-13', lab: 'Lab 1' },
  { id: 'SMP-026', status: 'Pending', date: '2025-07-13', lab: 'Lab 2' },
  { id: 'SMP-027', status: 'Rejected', date: '2025-07-13', lab: 'Lab 3' },
  { id: 'SMP-028', status: 'Approved', date: '2025-07-14', lab: 'Lab 1' },
  { id: 'SMP-029', status: 'Pending', date: '2025-07-14', lab: 'Lab 2' },
  { id: 'SMP-030', status: 'Rejected', date: '2025-07-15', lab: 'Lab 3' },
  { id: 'SMP-031', status: 'Approved', date: '2025-07-15', lab: 'Lab 1' },
  { id: 'SMP-032', status: 'Pending', date: '2025-07-16', lab: 'Lab 2' },
  { id: 'SMP-033', status: 'Rejected', date: '2025-07-16', lab: 'Lab 3' },
  { id: 'SMP-034', status: 'Approved', date: '2025-07-17', lab: 'Lab 1' },
  { id: 'SMP-035', status: 'Pending', date: '2025-07-18', lab: 'Lab 2' },
  { id: 'SMP-036', status: 'Rejected', date: '2025-07-18', lab: 'Lab 3' },
  { id: 'SMP-037', status: 'Approved', date: '2025-07-19', lab: 'Lab 1' },
  { id: 'SMP-038', status: 'Pending', date: '2025-07-20', lab: 'Lab 2' },
  { id: 'SMP-039', status: 'Rejected', date: '2025-07-20', lab: 'Lab 3' },
  { id: 'SMP-040', status: 'Approved', date: '2025-07-21', lab: 'Lab 1' },
  { id: 'SMP-041', status: 'Pending', date: '2025-07-21', lab: 'Lab 2' },
  { id: 'SMP-042', status: 'Rejected', date: '2025-07-22', lab: 'Lab 3' },
  { id: 'SMP-043', status: 'Approved', date: '2025-07-23', lab: 'Lab 1' },
  { id: 'SMP-044', status: 'Pending', date: '2025-07-23', lab: 'Lab 2' },
  { id: 'SMP-045', status: 'Rejected', date: '2025-07-24', lab: 'Lab 3' },
  { id: 'SMP-046', status: 'Approved', date: '2025-07-25', lab: 'Lab 1' },
  { id: 'SMP-047', status: 'Pending', date: '2025-07-26', lab: 'Lab 2' },
  { id: 'SMP-048', status: 'Rejected', date: '2025-07-26', lab: 'Lab 3' },
  { id: 'SMP-049', status: 'Approved', date: '2025-07-27', lab: 'Lab 1' },
  { id: 'SMP-050', status: 'Pending', date: '2025-07-28', lab: 'Lab 2' },
] satisfies Sample[];

export type SamplesTableProps = {
  samples: Sample[];
};

export type Sample = {
  id: string;
  status: 'Approved' | 'Pending' | 'Rejected';
  date: string;
  lab: string;
};

type PieData = {
  name: string;
  value: number;
  fill: string;
};

type CountPerDate = {
  date: string;
  count: number;
};

const STATUS_COLORS: Record<string, string> = {
  Approved: '#4ade80', // green-400
  Pending: '#facc15', // yellow-400
  Rejected: '#f87171', // red-400
};

export const pieChartConfig = {
  approved: {
    label: 'Approved',
    color: 'var(--chart-1)',
  },
  pending: {
    label: 'Pending',
    color: 'var(--chart-2)',
  },
  rejected: {
    label: 'Rejected',
    color: 'var(--chart-3)',
  },
} satisfies ChartConfig;

export function getStatusPieData(samples: Sample[]): PieData[] {
  const counts: Record<string, number> = {};

  for (const sample of samples) {
    counts[sample.status] = (counts[sample.status] || 0) + 1;
  }

  return Object.entries(counts).map(([status, count]) => ({
    name: status,
    value: count,
    fill: STATUS_COLORS[status] || '#a3a3a3', // fallback gray
  }));
}

export const barChartConfig = {
  count: {
    label: 'Count',
    color: '#2563eb',
  },
};

export function getBarChartData(samples: Sample[]): CountPerDate[] {
  const countMap: Record<string, number> = {};

  for (const sample of samples) {
    const date = sample.date;
    countMap[date] = (countMap[date] || 0) + 1;
  }

  return Object.entries(countMap)
    .map(([date, count]) => ({ date, count, fill: '#2563eb' }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

export function getDateRangeFromSamples(samples: Sample[]): {
  minDate: string;
  maxDate: string;
} {
  if (samples.length === 0) {
    throw new Error('Sample list is empty');
  }

  let minDate = samples[0].date;
  let maxDate = samples[0].date;

  for (const sample of samples) {
    if (sample.date < minDate) minDate = sample.date;
    if (sample.date > maxDate) maxDate = sample.date;
  }

  return { minDate, maxDate };
}
