import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { formatTime, getAmPm } from '@/lib/format';
import { CountedCall } from '@/types';
import {
  PhoneForwardedIcon,
  PhoneIncomingIcon,
  PhoneMissedIcon,
} from 'lucide-react';
import CallArchiveDialog from './CallArchiveDialog';

export default function CallItem({ call }: { call: CountedCall }) {
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
    <button className='focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 hover:bg-white focus:bg-white transition-all duration-300 rounded-lg w-[300px] mx-auto'>
      <Card className='bg-transparent'>
        <CardContent className='p-0 pl-4 py-4 flex items-center justify-between'>
          <div className='flex gap-4 items-center'>
            {getIcon(call.call_type ?? '')}
            <div className='flex items-center gap-2'>
              <p className='text-sm font-bold'>{callerId || call.to}</p>
              {call.count > 1 && (
                <Badge className='bg-destructive h-4 w-4 flex justify-center p-0 text-xs font-bold'>
                  {call.count}
                </Badge>
              )}
            </div>
          </div>
          <div className='pl-2 flex items-center gap-1 text-sm font-bold text-muted-foreground'>
            <CallArchiveDialog call={call} />
            <span>{formatTime(call.created_at)}</span>
            <span className='border rounded-l-lg p-1 text-xs'>
              {getAmPm(call.created_at)}
            </span>
          </div>
        </CardContent>
      </Card>
    </button>
  );
}
