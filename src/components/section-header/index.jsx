import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HeaderWrapper } from './style'
// import IconArrowRight from '@/assets/svg/icon-arrow-right'

const SectionHeader = memo((props) => {
  const { title, subTitle } = props
  // const [showIcon, setShowIcon] = useState(false)

  // function mouseEnter() {
  //   setShowIcon(true)
  // }
  // function mouseLeave() {
  //   setShowIcon(false)
  // }
  return (
    <HeaderWrapper>
      <div className='wrapper'>
        <div className='title-content'>
        <h2 className='title'>{title}</h2>
        { subTitle && <div className='subtitle'>{subTitle}</div>}
        </div>
        {/* <div className={`right-icon ${showIcon ? 'show' : 'hide'}`} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
          <IconArrowRight />
        </div> */}
      </div>
    </HeaderWrapper>
  )
})

SectionHeader.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string
}

export default SectionHeader