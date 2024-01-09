import { Button } from '@/components/ui/button';
import { ArchiveIcon } from 'lucide-react';
import { archiveAllCalls } from '../redux/features/callsSlice';
import { useAppDispatch } from '../redux/hooks';

export default function ArchiveAllButton() {
  const dispatch = useAppDispatch();

  const handleArchiveAllCalls = () => {
    dispatch(archiveAllCalls());
  };

  return (
    <Button
      onClick={handleArchiveAllCalls}
      variant={'ghost'}
      className='hover:bg-white focus:bg-white gap-2 justify-start border-b border-x rounded-b-lg rounded-t-none w-[300px] mx-auto'>
      <ArchiveIcon size={18} className='text-muted-foreground' />
      <p className='text-sm font-bold text-muted-foreground'>
        Archive all calls
      </p>
    </Button>
  );
}
