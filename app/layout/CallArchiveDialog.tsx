import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { archiveCall } from '@/lib/storage';
import { Call } from '@/types';
import { MoreVerticalIcon } from 'lucide-react';
import Link from 'next/link';

const CallArchiveDialog = ({ call }: { call: Call }) => {
  const handleArchive = () => {
    archiveCall(call.id);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className='p-0' variant={'ghost'}>
          <MoreVerticalIcon
            size={18}
            strokeWidth={'0.75px'}
            className='text-muted-foreground'
          />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Call Options</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription>
          Choose an action for this call.
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
          <AlertDialogAction>
            <Link href={`/call-details/${call.id}`}>View Details</Link>
          </AlertDialogAction>
          <AlertDialogAction
            onClick={handleArchive}
            className='bg-destructive hover:bg-destructive/90'>
            Archive Call
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CallArchiveDialog;
