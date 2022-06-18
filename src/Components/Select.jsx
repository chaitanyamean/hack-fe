import React from 'react'

export default function Select(props) {
    const {options, onSelectChange, title} = props;
    return (
        <div>
            <select onChange={(e) => onSelectChange(e)}>
                <option>{title}</option>
                {options && options.map((item, index) => {
              return(
                  <option key={item}>{item}
                  </option>
                  )  
                })}
            </select>
        </div>
    )
}
