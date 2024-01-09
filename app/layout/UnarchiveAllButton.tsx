import { Button } from '@/components/ui/button';
import { ArchiveIcon } from 'lucide-react';
import { unarchiveAllCalls } from '../redux/features/callsSlice';
import { useAppDispatch } from '../redux/hooks';

export default function UnarchiveAllButton() {
  const dispatch = useAppDispatch();

  const handleArchiveAllCalls = () => {
    dispatch(unarchiveAllCalls());
  };

  return (
    <Button
      onClick={handleArchiveAllCalls}
      variant={'ghost'}
      className='hover:bg-white focus:bg-white gap-2 justify-start border rounded-lg w-[300px] mx-auto'>
      <ArchiveIcon size={18} className='text-muted-foreground' />
      <p className='text-sm font-bold text-muted-foreground'>
        Unarchive all calls
      </p>
    </Button>
  );
}
