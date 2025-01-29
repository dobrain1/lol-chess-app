import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ChampionType from '../types/ChampionType.ts';

interface ChampionBuilderState {
  slots: Array<ChampionType | null>;
}

const initialState: ChampionBuilderState = {
  slots: Array(28).fill(null),
};

const championBuilderSlice = createSlice({
  name: 'championBuilder',
  initialState,
  reducers: {
    fillSlot: (
      state,
      action: PayloadAction<{ slotIndex: number; champion: ChampionType }>,
    ) => {
      const { slotIndex, champion } = action.payload;
      if (state.slots[slotIndex] !== undefined) {
        state.slots[slotIndex] = champion;
      }
    },
    emptySlot: (state, action: PayloadAction<number>) => {
      const slotIndex = action.payload;
      if (state.slots[slotIndex] !== undefined) {
        state.slots[slotIndex] = null;
      }
    },
  },
});

export const { fillSlot, emptySlot } = championBuilderSlice.actions;

export default championBuilderSlice.reducer;
