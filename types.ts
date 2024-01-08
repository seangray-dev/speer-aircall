export type Call = {
  id: string;
  created_at: string;
  direction?: string;
  from?: number;
  to?: number;
  via?: number;
  duration?: number;
  call_type?: string;
  is_archived?: boolean;
};

export type CountedCall = Call & { count: number };

export type CallGroups = {
  [date: string]: { [key: string]: CountedCall };
};
