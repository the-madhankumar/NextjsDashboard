
import React from 'react';
import General from '@/components/Card/General';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Calendar from '@/components/Card/Calendar';
import Calendar16 from '@/components/Card/Calendar16';
import { Line } from '@nivo/line';
import Lines from '@/components/Card/Lines';
import { TableDemo } from '@/components/Card/Table';
import { DataTableDemo } from '@/components/Card/DataTable';

const Home = () => {
  return (
    <><div className="grid grid-cols-2 gap-[25px] mb-[25px]">
      <General />
      <div className="grid gap-[25px]">
        <Calendar />
        <Calendar16 />
      </div>
    </div><div className="grid grid-cols-3 gap-[25px]">
        <Lines/>
        <Card className='h-[250px] overflow-y-scroll'>
        <CardHeader>
        <CardTitle>Orders</CardTitle>
        <CardDescription>These are the orders of this month</CardDescription>
        </CardHeader>
          <TableDemo/>
        </Card>
        <Card className='h-[250px] overflow-y-scroll p-3'>
        <CardHeader>
        <CardTitle>Users</CardTitle>
        <CardDescription>These are the users of this month</CardDescription>
        </CardHeader>
          <DataTableDemo/>
        </Card>
      </div></>
  );
};

export default Home;
