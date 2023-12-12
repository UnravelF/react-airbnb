import PropTypes from 'prop-types'
import React, { memo, useState, useCallback } from 'react'
import { SectionV2Wrapper } from './style'
import SectionHeader from 'components/section-header'
import SectionTabs from 'components/section-tabs'
import SectionRooms from 'components/section-rooms'
import SectionFooter from 'components/section-footer'

const HomeSectionV2 = memo((props) => {
  const { infoData } = props
  const initalName = Object.keys(infoData.dest_list)[0]
  // 数据转换
  const [name, setName] = useState(initalName)
  const tabsNames = infoData.dest_address?.map(item => item.name)
  // tab点击回调
  const tabClickHandle = useCallback(function (index, name) {
    setName(name)
  }, [])

  return (
    <SectionV2Wrapper>
      <div className="discount">
          <SectionHeader title={infoData.title} subTitle={infoData.subtitle} />
          <SectionTabs tabNames={tabsNames} tabClick={tabClickHandle} />
          <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth="33.333333%" />
          <SectionFooter name={name} />
        </div>
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV2