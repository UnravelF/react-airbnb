import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ViewWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const ScrollView = memo((props) => {
  // 定义组件内部状态
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)
  const [posIndex, setPosIndex] = useState(0)
  // useRef 组件多次渲染时保证第一次的值
  const totalDistanceRef = useRef()

  // 组件渲染完毕 判断是否显示右侧按钮
  // 获取传入的组件实例
  const scrollContentRef = useRef()
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth  // 可滚动的宽度
    const clientWidth = scrollContentRef.current.clientWidth // 本身占据的宽度
    const totalDistance = scrollWidth - clientWidth
    totalDistanceRef.current = totalDistance
    setShowRight(totalDistance > 0)
  }, [props.children])

  // 事件逻辑的处理
  function arrowClickHandle(isRight) {
    const newIndex = isRight? posIndex + 1 : posIndex -1
    const newEl = scrollContentRef.current.children[newIndex]
    const newOffsetLeft = newEl.offsetLeft
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`
    setPosIndex(newIndex)
    // 是否继续显示右边按钮
    setShowRight(totalDistanceRef.current > newOffsetLeft)
    // 只要当前元素offsetLeft大于0 显示左边按钮
    setShowLeft(newOffsetLeft > 0)
  }

  return (
    <ViewWrapper>
      {showLeft && (
        <div className='control left' onClick={e => arrowClickHandle(false)}>
          <IconArrowLeft />
        </div>
      )}
      {showRight && (
        <div className='control right' onClick={e =>arrowClickHandle(true)}>
          <IconArrowRight />
        </div>
      )}
      <div className="scroll">
        <div className='slot-content' ref={scrollContentRef}>
          {props.children}      
        </div>
      </div>
    </ViewWrapper>
  )
})

ScrollView.propTypes = {}

export default ScrollView