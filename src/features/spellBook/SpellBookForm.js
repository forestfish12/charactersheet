import React, { useState } from "react";
import { addSpell } from "./spellBookSlice";
import { useDispatch } from "react-redux";

const SpellBookForm = (props) => {
  // const [name, setName] = useState("");  
  // const [castingTime, setCastingTime] = useState("");  
  // const [range, setRange] = useState("");
  // const [components, setComponents] = useState("");
  // const [duration, setDuration] = useState("");
  // const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const initialState = {
    name: '',
    castingTime: '',
    range: '',
    components: '',
    duration: '',
    description: '',
  }
  const [spell, setSpell] = useState(initialState);
  const [id, setId] = useState(0);

  const newId = () => {
    setId(prev => prev + 1);
    return id;
  }

  const handleChange = ({target}) => {
    setSpell(prev => {
      return {
        ...prev,
        [target.name]: target.value
      }
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addSpell({...spell, id: newId()}));
    setSpell(initialState);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input 
          name="name" 
          id="name"
          value={spell.name} 
          type="text"
          onChange={handleChange}
        />
        <label htmlFor="castingTime">Casting Time: </label>
        <input 
          name="castingTime" 
          id="castingTime"
          value={spell.castingTime} 
          type="text" 
          onChange={handleChange}
        />
        <label htmlFor="range">Range: </label>
        <input
          name="range"
          id="range"
          value={spell.range}
          type="text"
          onChange={handleChange}
        />
        <label htmlFor="components">Components: </label>
        <input
          name="components"
          id="components"
          value={spell.components}
          type="text"
          onChange={handleChange}
        />
        <label htmlFor="duration">Duration: </label>
        <input
          name="duration"
          id="duration"
          value={spell.duration}
          type="text"
          onChange={handleChange}
        />
        <label htmlFor="description">Description: </label>
        <input
          name="description"
          id="description"
          value={spell.description}
          type="text"
          onChange={handleChange}
        />
        <button type="submit">Save</button>
      </form>
    </>
  )
  /**
  *return (
  *  <form onSubmit={handleSubmit}>
  *    {Object.entries(spell).map(([entryName, entryValue]) => {
  *      const labelName = entryName.charAt(0).toUpperCase() + entryName.slice(1);
  *      return(
  *        <label key={entryName} htmlFor={entryName}>{labelName}: 
  *          <input 
  *            name={entryName}
  *            id={entryName}
  *            type="text"
  *            value={spell[entryName]}
  *            onChange={handleChange}
  *          />
  *        </label>
  *      )
  *    })
  *    }
  *    <button type="submit">Save</button>
  *  </form>
  *)
 */
}

export default SpellBookForm;