import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getHomeGoodPriceData, getHomeHighScoreData, getHomeDiscountData, getHomeRecommendData } from '@/services'

// 异步actions  网络请求
// 高性价比
export const fetchHomeDataAction = createAsyncThunk('fetchdata', (payload, {dispatch, getState}) => {
  getHomeGoodPriceData().then((res) => {
    dispatch(changeGoodPriceInfoAction(res))
  })
  getHomeHighScoreData().then((res) => {
    dispatch(changeHighScoreInfoAction(res))
  })
  getHomeDiscountData().then((res) => {
    dispatch(changeDiscountInfoAction(res))
  })
  getHomeRecommendData().then((res) => {
    dispatch(changeRecommendInfoAction(res))
  })
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    highScoreInfo: {},
    goodPriceInfo: {},
    discountInfo: {},
    recommendInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, {payload}) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state, {payload}) {
      state.highScoreInfo = payload
    },
    changeDiscountInfoAction(state, {payload}) {
      state.discountInfo = payload
    },
    changeRecommendInfoAction(state, { payload }) {
      state.recommendInfo = payload
    }
  },
})

export const { 
  changeGoodPriceInfoAction, 
  changeHighScoreInfoAction, 
  changeDiscountInfoAction,
  changeRecommendInfoAction
 } = homeSlice.actions

export default homeSlice.reducer
