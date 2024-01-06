'use client';

import { Button } from '@/components/ui/button';
import { formatDate, processCalls } from '@/lib/format';
import { ArchiveIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import CallItem from './CallItem';

export default function ActivityFeed() {
  const [callGroups, setCallGroups] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const getActivityFeed = async () => {
      try {
        const response = await fetch(
          'https://cerulean-marlin-wig.cyclic.app/activities'
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const processedCalls = processCalls(data);
        setCallGroups(processedCalls);
      } catch (error) {
        setError(error.message);
        console.error('Fetch error:', error);
      }
    };
    getActivityFeed();
  }, []);

  const processCalls = (calls) => {
    const groupedByDate = {};

    // First, group calls by date
    calls.forEach((call) => {
      const date = new Date(call.created_at).toISOString().split('T')[0];
      if (!groupedByDate[date]) {
        groupedByDate[date] = [];
      }
      groupedByDate[date].push(call);
    });

    // Now, within each date, group by 'from' number and count the occurrences
    const groupedAndCounted = Object.entries(groupedByDate).reduce(
      (acc, [date, calls]) => {
        const counted = calls.reduce((a, c) => {
          const key = c.from;
          if (!a[key]) {
            a[key] = { ...c, count: 1 };
          } else {
            a[key].count++;
          }
          return a;
        }, {});

        acc[date] = Object.values(counted).sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );

        return acc;
      },
      {}
    );

    return groupedAndCounted;
  };

  return (
    <div className='flex flex-col gap-4 w-full container px-4 pb-4'>
      <Button
        variant={'ghost'}
        className='hover:bg-white focus:bg-white w-full gap-2 justify-start border-b border-x rounded-b-lg rounded-t-none'>
        <ArchiveIcon size={18} className='text-muted-foreground' />
        <p className='text-sm font-bold text-muted-foreground'>
          Archive all calls
        </p>
      </Button>
      {error && <p className='text-red-500'>Error: {error}</p>}
      {Object.entries(callGroups)
        .sort(([date1], [date2]) => new Date(date2) - new Date(date1))
        .map(([date, calls]) => (
          <div key={date}>
            <h2 className='text-xs text-muted-foreground font-bold text-center mb-4'>
              {formatDate(date)}
            </h2>
            {calls.map((call) => (
              <CallItem key={call.id} call={call} />
            ))}
          </div>
        ))}
    </div>
  );
}
