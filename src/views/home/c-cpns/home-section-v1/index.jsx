import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionV1Wrapper } from './style'
import SectionHeader from 'components/section-header'
import SectionRooms from 'components/section-rooms'

const HomeSectionV1 = memo((props) => {
  const { infoData } = props
  return (
    <SectionV1Wrapper>
      <div className="good-price">
        <SectionHeader title={infoData.title} subTitle={infoData.subtitle} />
        <SectionRooms roomList={infoData.list} />
      </div>
    </SectionV1Wrapper>
  )
})

HomeSectionV1.propTypes = {
  infoData: PropTypes.object
}

export default HomeSectionV1