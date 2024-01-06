const BASE_URL = 'https://cerulean-marlin-wig.cyclic.app';

export const getActivityFeed = async () => {
  try {
    const res = await fetch(`${BASE_URL}/activities`);

    if (!res.ok) {
      throw new Error(`Failed to fetch data ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error('Failed to fetch acitivity feed: ', error);
    throw error;
  }
};

export const fetchCallDetails = async (callId: string) => {
  try {
    const res = await fetch(`${BASE_URL}/activities/${callId}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch data ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error('Failed to fetch call details: ', error);
    throw error;
  }
};
