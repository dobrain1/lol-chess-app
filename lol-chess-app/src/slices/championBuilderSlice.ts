import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ChampionType from '../types/ChampionType.ts';
import ItemType from '../types/ItemType.ts';
import BuildDataType from '../types/BuildDataType.ts';

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
    addItem: (
      state,
      action: PayloadAction<{
        slotIndex: number;
        item: ItemType;
      }>,
    ) => {
      const { slotIndex, item } = action.payload;
      const champion = state.slots[slotIndex];

      if (!champion) {
        return;
      }

      if (!champion.items) {
        champion.items = [null, null, null];
      }

      const freeSlotIndex = champion.items.findIndex((slot) => slot === null);

      if (freeSlotIndex !== -1) {
        champion.items[freeSlotIndex] = item;
      }
    },
    fullFillSlot: (state, action: PayloadAction<BuildDataType>) => {
      if (action.payload.fullList) {
        state.slots = action.payload.fullList;
      }
    },
  },
});

export const { fillSlot, emptySlot, addItem, fullFillSlot } =
  championBuilderSlice.actions;

export default championBuilderSlice.reducer;
