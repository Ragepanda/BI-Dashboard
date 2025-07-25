import React, { Fragment } from 'react';
import SamplesTable from './SamplesTable';
import {
  barChartConfig,
  getBarChartData,
  getStatusPieData,
  pieChartConfig,
  Sample,
  samples,
  getDateRangeFromSamples,
} from './SamplesPageUtils';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '../../components/ui/chart';
import { Pie, PieChart, BarChart, Bar, XAxis } from 'recharts';
import { DateRangePicker } from '../../components/ui/DateRangePicker';

const { minDate, maxDate } = getDateRangeFromSamples(samples);

const SamplesView: React.FC = () => {
  return (
    <Fragment>
      <h1 className="font-sans w-full px-md py-md text-2xl">
        Mini BI Dashboard with Design System Principles
      </h1>
      <DateRangePicker minDate={minDate} maxDate={maxDate} />
      <section className="flex place-content-evenly">
        <Card>
          <CardHeader>
            <CardTitle>Approvals Status</CardTitle>
            <CardDescription>
              Take a look at the breakdown of your samples by administrative
              status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={pieChartConfig}
              className="mx-auto aspect-square max-h-[250px]"
            >
              <PieChart>
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      className="bg-black text-white w-[150px] "
                      nameKey="name"
                    />
                  }
                />
                <Pie
                  data={getStatusPieData(samples)}
                  dataKey="value"
                  nameKey="name"
                />
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Samples by Date</CardTitle>
            <CardDescription>
              Take a look at the breakdown of your samples by date
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={barChartConfig}>
              <BarChart data={getBarChartData(samples)}>
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  minTickGap={16}
                  tickFormatter={(value: any) => {
                    const date = new Date(value);
                    return date.toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                    });
                  }}
                />
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      className="bg-black text-white w-[150px] "
                      nameKey="views"
                      labelFormatter={(value) => {
                        return new Date(value).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        });
                      }}
                    />
                  }
                />
                <Bar dataKey="count" />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </section>
      <SamplesTable samples={samples} />
    </Fragment>
  );
};

export default SamplesView;
