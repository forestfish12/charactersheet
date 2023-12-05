import React from "react";
import { useDispatch } from "react-redux";
import { removeSpell } from "./spellBookSlice";

const Spell = ({ spell }) => {
  const dispatch = useDispatch();
  const handleRemoveSpell = e => {
    dispatch(removeSpell(spell))
  }

  return (
    <div>
      <h2>{spell.name}</h2>
      <p>Casting Time: {spell.castingTime}</p>
      <p>Range: {spell.range}</p>
      <p>Components: {spell.components}</p>
      <p>Duration: {spell.duration}</p>
      <p>Description: {spell.description}</p>
      <button onClick={handleRemoveSpell} >Remove</button>
    </div>
  )
}

export default Spell;