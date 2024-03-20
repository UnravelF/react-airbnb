import React, { memo, useEffect } from 'react'
import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter'
import EntireRooms from './c-cpns/entire-rooms'
import EntirePagination from './c-cpns/entire-pagination'
import { useDispatch } from 'react-redux'
import { fetchRoomListAction } from '@/store/modules/entire/createActions'

const Entire = memo(() => {
  // 派发网络请求
  const dispatch = useDispatch()
    useEffect(() => {
      dispatch(fetchRoomListAction())
    }, [dispatch])

  return (
    <EntireWrapper>
      <EntireFilter className="filter">filter-section</EntireFilter>
      <EntireRooms className="rooms">room-section</EntireRooms>
      <EntirePagination className="pagination">pagination-section</EntirePagination>
    </EntireWrapper>
  )
})

export default Entire