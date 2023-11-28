import React, { memo, useEffect, useState } from 'react'
import request from '@/services'

const Home = memo(() => {
  // 定义状态
  const [highScore, setHighScore] = useState({})
  // 网路请求代码
  useEffect(() => {
    request.get({url: '/home/highscore'}).then(res => {
      console.log(res)
      setHighScore(res)
    })
  }, [])

  return (
    <div>
      <h2>{highScore.title}</h2>
      <h3>{highScore.subtitle}</h3>
      <ul>
        {highScore?.list?.map(item => {
          return <li key={item.id}>{item.name}</li>
        })}
      </ul>
    </div>
  )
})

export default Home