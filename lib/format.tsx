import {
  PhoneForwardedIcon,
  PhoneIncomingIcon,
  PhoneMissedIcon,
} from 'lucide-react';

export const getIcon = (call_type: string) => {
  switch (call_type) {
    case 'missed':
      return <PhoneMissedIcon size={18} className='text-red-500' />;
    case 'answered':
      return <PhoneIncomingIcon size={18} className='text-primary' />;
    case 'voicemail':
      return <PhoneForwardedIcon size={18} className='text-red-500' />;
  }
};

export const formatTime = (timeString: string) => {
  const time = new Date(timeString);
  return time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
};

export const getAmPm = (timeString: string) => {
  const time = new Date(timeString);
  return time
    .toLocaleTimeString('en-US', { hour: 'numeric', hour12: true })
    .slice(-2);
};

export const formatDate = (dateString: string) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const convertDuration = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins} minute${mins !== 1 ? 's' : ''}, ${secs} second${
    secs !== 1 ? 's' : ''
  }`;
};
