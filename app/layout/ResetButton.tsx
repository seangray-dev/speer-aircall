import { Button } from '@/components/ui/button';
import { RotateCcwIcon } from 'lucide-react';
import { resetCalls } from '../redux/features/callsSlice';
import { useAppDispatch } from '../redux/hooks';

export default function ResetButton() {
  const dispatch = useAppDispatch();

  const handleReset = () => {
    dispatch(resetCalls());
  };

  return (
    <Button
      onClick={handleReset}
      variant={'ghost'}
      className='hover:bg-white focus:bg-white gap-2 justify-start border-b border-x rounded-b-lg rounded-t-none w-[300px] mx-auto'>
      <RotateCcwIcon size={18} className='text-muted-foreground' />
      <p className='text-sm font-bold text-muted-foreground'>Reset Calls</p>
    </Button>
  );
}
