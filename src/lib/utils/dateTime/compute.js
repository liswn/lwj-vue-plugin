const getTimestamp = (dateTime) => {
  return new Date(dateTime).getTime() || null
}
/**
 * 比较时间大小
 * @param {*} d1 待比较的时间
 * @param {*} d2 待比较的时间
 * @return d1 > d2 => 1 ; d1 = d2 => 0 ; d1 < d2 => -1
 */
export const compareDateTime = (d1, d2) => {
  if (getTimestamp(d1) && getTimestamp(d2)) {
    if (getTimestamp(d1) > getTimestamp(d2)) {
      return 1
    } else if (getTimestamp(d1) === getTimestamp(d2)) {
      return 0
    } else {
      return -1
    }
  } else {
    console.error('Params Must Be Date')
  }
}

/**
 * 返回两个日期之间的毫秒数的差距
 * @param {*} d1 日期对象
 * @param {*} d2 日期对象
 * @return 二者至1970年1.1后的毫秒数的差值
 */
export const getMillisecondsOfTwoDate = (d1, d2) => {
  if (getTimestamp(d1) && getTimestamp(d2)) {
    return getTimestamp(d1) - getTimestamp(d2)
  } else {
    console.error('Params Must Be Date')
  }
}
