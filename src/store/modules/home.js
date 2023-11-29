import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getHomeGoodPriceData } from '@/services'

// 异步actions  网络请求
// 高性价比
export const fetchHomeDataAction = createAsyncThunk('fetchdata', async (payload) => {
  const res = await getHomeGoodPriceData()
  return res
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {}
  },
  reducers: {
    changeGoodPriceInfo(state, {payload}) {
      state.goodPriceInfo = payload
    }
  },
  extraReducers: {
    [fetchHomeDataAction.fulfilled](state, {payload}) {
      state.goodPriceInfo = payload
      console.log("state.goodPriceInfo", state.goodPriceInfo);
    }
  }
})

export const { changeGoodPriceInfo } = homeSlice.actions

export default homeSlice.reducer
