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
 *    name: 'Fire Bolt,
 *    id:,
 *    description:'You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 fire damage. A flammable object hit by this spell ignites if it isn’t being worn or carried.
 *    At Higher Levels. This spell’s damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).',
 *  },
 *  {
 *    name: 'Ray of Frost',
 *    id:,
 *    description: 'A frigid beam of blue-white light streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, it takes 1d8 cold damage, and its speed is reduced by 10 feet until the start of your next turn.
 *    At Higher Levels. The spell’s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).'
 *  }
 * ]
 */