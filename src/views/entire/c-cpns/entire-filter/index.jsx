import React, { memo, useState } from 'react'
import { FilterWrapper } from './style'
import filterData from '@/assets/data/filter_data.json'
import classNames from 'classnames'

const EntireFilter = memo(() => {

  const [selectItem, setSelectItem] = useState([])

  function itemClickHandle(item) {
    const newItem = [...selectItem];
    if(newItem.includes(item)) {
      const itemIndex = newItem.findIndex(filterItem => filterItem === item)
      newItem.splice(itemIndex, 1)
    } else {
      newItem.push(item)
    }
    setSelectItem(newItem)
  }

  return (
    <FilterWrapper>
      <div className="filter">
        {
          filterData.map((item, index) => {
            return (
              <div key={item} 
              className={classNames('item', {active: selectItem.includes(item)})}
              onClick={e => itemClickHandle(item)}>{item}</div>
            )
          })
        }
      </div>
    </FilterWrapper>
  )
})

export default EntireFilter