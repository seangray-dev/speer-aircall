import { Button } from '@/components/ui/button';
import { PhoneIcon, Settings2Icon } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='relative grid grid-cols-[1fr_2fr] border-b max-w-[320px]'>
      <div className='flex items-center px-4 border rounded-br-[20px] pr-12 bg-white'>
        <Link href={'/'}>
          <div className='flex items-center gap-2'>
            <div className='border-2 border-primary flex justify-center items-center rounded-full h-6 w-6'>
              <PhoneIcon
                size={12}
                strokeWidth={'3px'}
                className='text-primary'
              />
            </div>
            <h1 className='font-bold text-muted-foreground text-sm'>
              Activity
            </h1>
          </div>
        </Link>
      </div>

      <div className='flex bg-secondary py-1 justify-end rounded-tl-[20px] border-r'>
        <Link href={'/'}>
          <Button
            variant={'ghost'}
            className='p-0 text-xs px-2 text-muted-foreground'>
            Inbox
          </Button>
        </Link>
        <Link href={'/archive'}>
          <Button
            variant={'ghost'}
            className='p-0 text-xs px-2 text-muted-foreground'>
            Archive
          </Button>
        </Link>
        <Button variant={'ghost'} className='p-0 px-2'>
          <Settings2Icon
            size={18}
            className='rotate-90 text-muted-foreground'
          />
        </Button>
      </div>
    </header>
  );
}
