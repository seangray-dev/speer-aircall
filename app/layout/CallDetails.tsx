import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { fetchCallDetails } from '@/lib/api';
import {
  convertDuration,
  formatDate,
  formatTime,
  getAmPm,
  getIcon,
} from '@/lib/format';
import { MoreVerticalIcon } from 'lucide-react';

export default async function CallDetails({ id }: { id: string }) {
  const call = await fetchCallDetails(id);
  const callerId = call.from || 'Private Number';

  return (
    <div className='mt-4'>
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
            <MoreVerticalIcon
              size={18}
              strokeWidth={'0.75px'}
              className='text-muted-foreground'
            />
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
