/**
 * 手机号码脱敏处理
 * @param {} mobile 手机号码
 */
const doMobile = (mobile) => {
  return mobile ? mobile.replace(/(\d{3})\d*(\d{4})/, '$1****$2') : '-'
}
export default doMobile
