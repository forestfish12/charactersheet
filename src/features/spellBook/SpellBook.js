import React from "react";

const SpellBook = props => {

  return (
    <>
      <form>
        <label htmlFor="name">Name: </label>
        <input name="name" id="name" type="text" />
        <label htmlFor="castingTime">Casting Time: </label>
        <input name="castingTime" id="castingTime"  type="text" />
        <label htmlFor="range">Range: </label>
        <input name="range" id="range"  />
        <label htmlFor="components">Components: </label>
        <input name="components" id="components"  />
        <label htmlFor="duration">Duration: </label>
        <input name="duration" id="duration"  />
        <label htmlFor="description">Description: </label>
        <input name="description" id="description"  />
        
      </form>
    </>
  )
}