import React, {useState} from "react";

const attributeNames = [
  'Strength',
  'Dexterity',
  'Constitution',
  'Intelligence',
  'Wisdom',
  'Charisma'
]

const attributeValues = [ 0, 0, 0, 0, 0, 0 ];

const findModifier = attribute => Math.floor(( attribute - 10 ) / 2);

const Attributes = () => {
  // const [str, setStr] = useState(0);
  // const [dex, setDex] = useState(0);
  // const [con, setCon] = useState(0);
  // const [int, setInt] = useState(0);
  // const [wis, setWis] = useState(0);
  // const [cha, setCha] = useState(0);
  const [values, setValues] = useState(attributeValues);

  return (
    <>
      {attributeNames.map( (item, index) => (
        <label>
          {item}: <input type="number" />
          Modifier: {}
          <br/>
        </label>

      ))}
    </>
  )
}