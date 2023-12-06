import request from "@/services/request";

export function getHomeGoodPriceData() {
  return request.get({
    url: '/home/goodprice'
  })
}

export function getHomeHighScoreData() {
  return request.get({
    url: '/home/highscore'
  })
}
