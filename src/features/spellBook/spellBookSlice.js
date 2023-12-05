import { createSlice } from "@reduxjs/toolkit";

const spellBookSlice = createSlice({
  initialState: [],
  name: 'spellBook',
  reducers: {
    addSpell: (state, action) => {
      state.push(action.payload);
    },
    removeSpell: (state, action) => {
      state = state.filter(spell => spell.id !== action.payload.id);
    }
  },
})

export const { addSpell, removeSpell } = spellBookSlice.actions;
export default spellBookSlice.reducer;
/**
 ** state structure example:
 * 
 * [
 *  {
 *    id:,
 *    name: 'Fire Bolt,
 *    castingTime: '1 action',
 *    range: '120ft',
 *    components: 'V, S',
 *    duration: 'Instantaneous',
 *    description:'You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 fire damage. A flammable object hit by this spell ignites if it isn’t being worn or carried.
 *    At Higher Levels. This spell’s damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).',
 *  },
 *  {
 *    ...
 *  }
 * ]
 */