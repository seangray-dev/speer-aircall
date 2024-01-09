'use client';

import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { fetchCallDetails } from '@/lib/api';
import { convertDuration, formatDate, formatTime, getAmPm } from '@/lib/format';
import {
  PhoneForwardedIcon,
  PhoneIncomingIcon,
  PhoneMissedIcon,
} from 'lucide-react';
import CallArchiveDialog from './CallArchiveDialog';

export default async function CallDetails({ id }: { id: string }) {
  const call = await fetchCallDetails(id);
  const callerId = call.from || 'Private Number';

  const getIcon = (call_type: string) => {
    switch (call_type) {
      case 'missed':
        return <PhoneMissedIcon size={18} className='text-red-500' />;
      case 'answered':
        return <PhoneIncomingIcon size={18} className='text-primary' />;
      case 'voicemail':
        return <PhoneForwardedIcon size={18} className='text-red-500' />;
      default:
        return <PhoneMissedIcon size={18} className='text-red-500' />;
    }
  };

  return (
    <div className='mt-4 px-4'>
      <h2 className='text-xs text-muted-foreground font-bold text-center mb-4'>
        {formatDate(call.created_at)}
      </h2>
      <Card className='bg-transparent'>
        <CardTitle className='text-center pt-4'>
          {callerId || call.to}
        </CardTitle>
        <CardContent className='p-0 pl-4 py-4 flex items-center justify-between'>
          <div className='flex gap-4 items-center'>
            <div className='flex flex-col gap-2'>
              <div>{getIcon(call.call_type)}</div>
              <div className='text-xs capitalize'>
                <div>{call.direction}</div>
                <div>{call.call_type}</div>
                <div>{convertDuration(call.duration)}</div>
              </div>
            </div>
          </div>
          <div className='pl-2 flex items-center gap-1 text-sm font-bold text-muted-foreground'>
            <CallArchiveDialog call={call} />
            <div>
              <div>
                <span>{formatTime(call.created_at)}</span>
                <span className='border rounded-l-lg p-1 text-xs'>
                  {getAmPm(call.created_at)}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
