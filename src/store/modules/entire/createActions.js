import { getEntireRoomList } from '@/services/modules/entire'
import * as actionTypes from './constant'

export const changeCurrentPageAction = (currentPage) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage
})
export const changeRoomListAction = (roomList) => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList
})
export const changeTotalCountAction = (totalCount) => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount
})

export const fetchRoomListAction = () => {
  return async (dispatch, getState) => {
    // 根据页码获取最新数据
    const currentPage = getState().entire.currentPage
    const res = await getEntireRoomList(currentPage * 20)
    const roomList = res.list
    const totalCount = res.totalCount
    // 存入redux 的 store
    dispatch(changeRoomListAction(roomList))
    dispatch(changeTotalCountAction(totalCount))
  }
}
