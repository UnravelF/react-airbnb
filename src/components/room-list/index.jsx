import PropTypes from 'prop-types'
import React, { memo } from 'react'
import RoomItem from 'components/room-item'
import { RoomWrapper } from './style'

const RoomList = memo((props) => {
  const { roomList = [] } = props
  return (
    <RoomWrapper>
      {
      roomList.slice(0, 8).map(item => {
        return <RoomItem key={item.id} itemData={item} />
      })
      }
    </RoomWrapper>
  )
})

RoomList.propTypes = {
  roomList: PropTypes.array
}

export default RoomList