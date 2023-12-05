import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Spell from "./Spell";

const SpellBook = props => {
  const spellBook = useSelector((state) => state.spellBook);

  return (
    <>
      {spellBook.map(spell => {
        return (
          <Spell spell={spell} key={spell.id}/>
        )
        }
      )}
      
    </>
  )
}

export default SpellBook;