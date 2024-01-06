import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { formatTime, getAmPm, getIcon } from '@/lib/format';
import { MoreVerticalIcon } from 'lucide-react';
import Link from 'next/link';

export default function CallItem({ call }) {
  const callerId = call.from || 'Private Number';
  return (
    <Link href={`/call-details/${call.id}`}>
      <button className='focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 hover:bg-white focus:bg-white transition-all duration-300 rounded-lg w-full'>
        <Card className='bg-transparent'>
          <CardContent className='p-0 pl-4 py-4 flex items-center justify-between'>
            <div className='flex gap-4 items-center'>
              {getIcon(call.call_type)}
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
              <MoreVerticalIcon
                size={18}
                strokeWidth={'0.75px'}
                className='text-muted-foreground'
              />
              <span>{formatTime(call.created_at)}</span>
              <span className='border rounded-l-lg p-1 text-xs'>
                {getAmPm(call.created_at)}
              </span>
            </div>
          </CardContent>
        </Card>
      </button>
    </Link>
  );
}