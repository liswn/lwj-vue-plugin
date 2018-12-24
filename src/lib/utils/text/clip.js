const textClip = (str = '', len = 10) => {
  if (typeof str === 'string' && typeof len === 'number' && len > 1) {
    let reg = new RegExp('^(.{' + len + '}).*')
    str = str.replace(reg, '$1…')
    return str
  } else {
    console.error('Parameter is error！')
  }
}
export default textClip
