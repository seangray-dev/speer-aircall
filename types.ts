export type Call = {
  id: string;
  created_at: string;
  direction?: 'inbound' | 'outbound';
  from?: number;
  to?: number;
  via?: number;
  duration?: number;
  call_type?: 'missed' | 'answered' | 'voicemail';
  is_archived?: boolean;
};

export type CountedCall = Call & { count: number };

export type CallGroups = {
  [date: string]: { [key: string]: CountedCall };
};
