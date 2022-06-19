import React from 'react'

export default function Select(props) {
    const {options, onSelectChange, title, data} = props;

    const getItem = (item) => {
        if(data) {
            return item[data[0]]
        } else {
            return item;
        }
    }

    const getKeyItem = (item) => {
        if(data) {
            return item[data[1]]
        } else {
            return item
        }
    }
    return (
        <div>
            <select onChange={(e) => onSelectChange(e)}>
                <option>{title}</option>
                {options && options.map((item, index) => {
              return(
                  <option key={getKeyItem(item)} value={getKeyItem(item)}>
                      {getItem(item)}
                  </option>
                  )  
                })}
            </select>
        </div>
    )
}
