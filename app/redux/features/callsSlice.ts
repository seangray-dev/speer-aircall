import { Call } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CallsState {
  allCalls: Call[];
}

const initialState: CallsState = {
  allCalls: [],
};

export const callsSlice = createSlice({
  name: 'calls',
  initialState,
  reducers: {
    setCalls: (state, action: PayloadAction<Call[]>) => {
      state.allCalls = action.payload;
    },
    toggleArchiveCall: (state, action: PayloadAction<string>) => {
      state.allCalls = state.allCalls.map((call) =>
        call.id === action.payload
          ? { ...call, is_archived: !call.is_archived }
          : call
      );
    },
    archiveAllCalls: (state) => {
      state.allCalls = state.allCalls.map((call) => ({
        ...call,
        is_archived: true,
      }));
    },
    resetCalls: (state) => {
      state.allCalls = initialState.allCalls;
    },
    unarchiveAllCalls: (state) => {
      state.allCalls = state.allCalls.map((call) => ({
        ...call,
        is_archived: false,
      }));
    },
  },
});

export const {
  setCalls,
  toggleArchiveCall,
  archiveAllCalls,
  resetCalls,
  unarchiveAllCalls,
} = callsSlice.actions;

export default callsSlice.reducer;
