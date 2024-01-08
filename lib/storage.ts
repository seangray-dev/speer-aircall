'use client'

export const archiveCall = (callId: string) => {
  const calls = JSON.parse(localStorage.getItem('calls') as string) || [];
  const archivedCalls =
    JSON.parse(localStorage.getItem('archivedCalls') as string) || [];

  const callToArchive = calls.find((call: any) => call.id === callId);
  if (callToArchive) {
    localStorage.setItem(
      'calls',
      JSON.stringify(calls.filter((call: any) => call.id !== callId))
    );
    localStorage.setItem(
      'archivedCalls',
      JSON.stringify([...archivedCalls, callToArchive])
    );
  }
};

export const unarchiveCall = (callId: string) => {
  const calls = JSON.parse(localStorage.getItem('calls') as string) || [];
  const archivedCalls =
    JSON.parse(localStorage.getItem('archivedCalls') as string) || [];

  const callToUnarchive = archivedCalls.find((call: any) => call.id === callId);
  if (callToUnarchive) {
    localStorage.setItem(
      'archivedCalls',
      JSON.stringify(archivedCalls.filter((call: any) => call.id !== callId))
    );
    localStorage.setItem('calls', JSON.stringify([...calls, callToUnarchive]));
  }
};
