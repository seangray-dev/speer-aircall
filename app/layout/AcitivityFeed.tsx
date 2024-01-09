'use client';

import { formatDate, groupCallsByDate } from '@/lib/format';
import React, { useEffect } from 'react';
import callsData from '../../calls.json';
import { setCalls } from '../redux/features/callsSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import ArchiveAllButton from './ArchiveAllButton';
import CallItem from './CallItem';
import ResetButton from './ResetButton';
import UnarchiveAllButton from './UnarchiveAllButton';

export default function ActivityFeed({
  showArchived,
}: {
  showArchived: boolean;
}) {
  const dispatch = useAppDispatch();
  const allCalls = useAppSelector((state) => state.calls.allCalls);

  useEffect(() => {
    if (allCalls.length === 0) {
      const fetchCalls = async () => {
        try {
          const res = await fetch(
            'https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/activities'
          );
          if (!res.ok) throw new Error('Network response was not ok');
          const calls = await res.json();
          dispatch(setCalls(calls));
        } catch (error) {
          console.error('Fetch error:', error);
          dispatch(setCalls(callsData));
        }
      };
      fetchCalls();
    }
  }, [dispatch, allCalls.length]);

  const relevantCalls = allCalls
    .filter((call) => call.is_archived === showArchived)
    .sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );

  const callsGroupedByDate = groupCallsByDate(relevantCalls);

  return (
    <div className='flex flex-col gap-6 w-[320px] pb-4 border-x h-full'>
      {showArchived ? (
        <div className='flex flex-col gap-2'>
          <ResetButton />
          <UnarchiveAllButton />
        </div>
      ) : (
        <ArchiveAllButton />
      )}
      {Object.entries(callsGroupedByDate).map(([date, calls]) => (
        <div key={date}>
          <h2 className='text-xs text-muted-foreground font-bold text-center mb-4'>
            {formatDate(date)}
          </h2>
          <div className='flex flex-col gap-4'>
            {calls.map((call) => (
              <CallItem key={call.id} call={call} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
