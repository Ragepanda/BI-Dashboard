import * as React from 'react';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { Calendar } from './calendar';
import { Button } from './button';
import { cn } from '../../lib/utils'; // optional utility

type DateRange = {
  from: Date | undefined;
  to: Date | undefined;
};

export function DateRangePicker({
  minDate,
  maxDate,
}: {
  minDate: string;
  maxDate: string;
}) {
  const [date, setDate] = React.useState<DateRange>({
    from: new Date(),
    to: new Date(),
  });

  const formattedRange =
    date.from && date.to
      ? `${format(date.from, 'LLL dd, y')} - ${format(date.to, 'LLL dd, y')}`
      : 'Pick a date range';

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn('w-[280px] justify-start text-left font-normal')}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          <span>{formattedRange}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="range"
          selected={date}
          onSelect={(range: any) => setDate(range as DateRange)}
          numberOfMonths={2}
        />
      </PopoverContent>
    </Popover>
  );
}
