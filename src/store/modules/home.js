import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getHomeGoodPriceData, getHomeHighScoreData } from '@/services'

// 异步actions  网络请求
// 高性价比
export const fetchHomeDataAction = createAsyncThunk('fetchdata', (payload, {dispatch, getState}) => {
  getHomeGoodPriceData().then((res) => {
    dispatch(changeGoodPriceInfo(res))
  })
  getHomeHighScoreData().then((res) => {
    dispatch(changeHighScoreInfo(res))
  })
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    highScoreInfo: {},
    goodPriceInfo: {}
  },
  reducers: {
    changeGoodPriceInfo(state, {payload}) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfo(state, {payload}) {
      state.highScoreInfo = payload
    }
  },
})

export const { changeGoodPriceInfo, changeHighScoreInfo } = homeSlice.actions

export default homeSlice.reducer
