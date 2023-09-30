import React, {useState} from "react";

const headerData = [
  { name: 'Character Name', type: 'text' },
  { name: 'Class', type: 'text' },
  { name: 'Level', type: 'number' },
  { name: 'Background', type: 'text' },
  { name: 'Player Name', type: 'text' },
  { name: 'Race', type: 'text' },
  { name: 'Alignment', type: 'text' },
  { name: 'Experience Points', type: 'number' }
]

const CharacterHeader = () => {
  const [header, setHeader] = useState(headerData);

  return (
    <div>
      {headerData.map(({name, type}) => (
          <label>
            {name}:
            <input type={type} /><br/>
          </label>
        )
      )}
    </div>
  )
}

export default CharacterHeader;