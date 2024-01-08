'use client';

import { Button } from '@/components/ui/button';
import { formatDate } from '@/lib/format';
import { Call, CallGroups, CountedCall } from '@/types';
import { ArchiveIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import callsData from '../../calls.json';
import CallItem from './CallItem';

export default function ActivityFeed({
  showArchived,
}: {
  showArchived: boolean;
}) {
  const [callGroups, setCallGroups] = useState<CallGroups>({});
  const localStorageCalls = JSON.parse(localStorage.getItem('calls') as string);

  useEffect(() => {
    const getActivityFeed = async () => {
      let calls = JSON.parse(localStorage.getItem('calls') as string);

      if (!calls) {
        try {
          const res = await fetch(
            'https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/activities'
          );
          if (!res.ok) throw new Error('Network response was not ok');
          calls = await res.json();
          localStorage.setItem('calls', JSON.stringify(calls));
        } catch (error) {
          console.error('Fetch error:', error);
          // fallback to static data if API fails
          calls = callsData;
        }
      }

      const processedCalls = processCalls(calls);
      setCallGroups(processedCalls);
    };

    getActivityFeed();
  }, [localStorageCalls]);

  const processCalls = (calls: Call[]): CallGroups => {
    const groupedByDate: { [key: string]: { [key: string]: CountedCall } } = {};

    const filteredCalls = calls.filter(
      (call) => call.is_archived === showArchived
    );

    filteredCalls.forEach((call) => {
      const date = new Date(call.created_at).toISOString().split('T')[0];
      if (!groupedByDate[date]) {
        groupedByDate[date] = {};
      }
      const key = call.from?.toString() || 'Unknown';
      if (!groupedByDate[date][key]) {
        groupedByDate[date][key] = { ...call, count: 1 };
      } else {
        groupedByDate[date][key].count++;
      }
    });

    return groupedByDate;
  };

  return (
    <div className='flex flex-col gap-6 w-[320px] pb-4 border-x h-full'>
      <Button
        variant={'ghost'}
        className='hover:bg-white focus:bg-white gap-2 justify-start border-b border-x rounded-b-lg rounded-t-none w-[300px] mx-auto'>
        <ArchiveIcon size={18} className='text-muted-foreground' />
        <p className='text-sm font-bold text-muted-foreground'>
          Archive all calls
        </p>
      </Button>
      {Object.entries(callGroups)
        .sort(
          ([date1], [date2]) =>
            new Date(date2).getTime() - new Date(date1).getTime()
        )
        .map(([date, calls]) => (
          <div key={date}>
            <h2 className='text-xs text-muted-foreground font-bold text-center mb-4'>
              {formatDate(date)}
            </h2>
            <div className='flex flex-col gap-4'>
              {Object.values(calls).map((call) => (
                <CallItem key={call.id} call={call} />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}
