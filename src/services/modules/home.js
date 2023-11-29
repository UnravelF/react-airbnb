import request from "@/services/request";

export function getHomeGoodPriceData() {
  return request.get({
    url: '/home/goodprice'
  })
}
