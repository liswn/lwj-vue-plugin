export const requiredSvg = () => {
  const req = require.context('./SvgIcon/svg', false, /\.svg$/)
  const requireAll = requireContext => requireContext.keys()
  const re = /\.\/(.*)\.svg/
  const icons = requireAll(req).map(i => {
    return i.match(re)[1]
  })
  console.log(icons)
}
export {default as SvgIcon} from './SvgIcon'
