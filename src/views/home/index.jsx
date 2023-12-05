import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import HomeBanner from './c-cpns/home-banner'
import SectionHeader from '@/components/section-header'
import SectionRoom from '@/components/section-room'
import { HomeWrapper } from './style'
import { fetchHomeDataAction } from '@/store/modules/home'


const Home = memo(() => {
  // 派发异步事件: 发送网络请求
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  // redux获取数据
  const { goodPriceInfo } =  useSelector((state) => ({
    goodPriceInfo: state.home.goodPriceInfo
  }), shallowEqual)

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className='content'>
        <div className="good-price">
          <SectionHeader title={goodPriceInfo.title} />
          <SectionRoom roomList={goodPriceInfo.list} />
        </div>
      </div>
    </HomeWrapper>
  )
})

export default Home