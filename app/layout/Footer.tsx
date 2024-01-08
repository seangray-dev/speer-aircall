import { Button } from '@/components/ui/button';
import {
  CircleIcon,
  CogIcon,
  GripIcon,
  PhoneIcon,
  UserIcon,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className='sticky bottom-0 flex items-center justify-between bg-white w-full max-w-[320px] border-t py-4 px-4'>
      <div className='flex gap-8'>
        <Button variant={'ghost'} className='p-0'>
          <PhoneIcon className='text-muted-foreground' />
        </Button>
        <Button variant={'ghost'} className='p-0'>
          <UserIcon className='text-muted-foreground' />
        </Button>
      </div>

      <div className='flex justify-center'>
        <Button variant={'ghost'} className='p-0 relative'>
          <div className='p-1 bg-white border rounded-full'>
            <div className='bg-primary h-16 w-16 flex justify-center items-center rounded-full'>
              <GripIcon size={48} className='text-white' />
            </div>
          </div>
        </Button>
      </div>

      <div className='flex gap-8'>
        <Button variant={'ghost'} className='p-0'>
          <CogIcon className='text-muted-foreground' />
        </Button>
        <Button variant={'ghost'} className='p-0'>
          <div className='relative'>
            <CircleIcon className='text-muted-foreground'></CircleIcon>
            <div className='absolute top-1/3 left-1/3 h-2 w-2 bg-primary rounded-full'></div>
          </div>
        </Button>
      </div>
    </footer>
  );
}
