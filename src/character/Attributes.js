import React, {useState} from "react";

const attributeNames = {
  'Strength': 0,
  'Dexterity': 0,
  'Constitution': 0,
  'Intelligence': 0,
  'Wisdom': 0,
  'Charisma': 0
}

// const attributeValues = [ 0, 0, 0, 0, 0, 0 ];

const findModifier = attribute => Math.floor(( attribute - 10 ) / 2);

const Attributes = () => {
  // const [str, setStr] = useState(0);
  // const [dex, setDex] = useState(0);
  // const [con, setCon] = useState(0);
  // const [int, setInt] = useState(0);
  // const [wis, setWis] = useState(0);
  // const [cha, setCha] = useState(0);
  const [pairs, setPairs] = useState();

  const attributePairArray = Object.entries(attributeNames)

  return (
    <>
      {attributePairArray.map( ([attrName, attrValue]) => 
        (
          <AtrInput name={attrName} value={attrValue} />
        )
      )
      }
    </>
  )
}

const AtrInput = ({name , value}) => {
  const [stateValue, setStateValue] = useState(value)

  const handleChange = ({target}) => {setStateValue(target.value)};

  return (
  <label>
    {name}: <input type="number" value={stateValue} onChange={handleChange}/>
    Modifier: {findModifier(stateValue)}
    <br/>
  </label>
  )
}

export default Attributes;