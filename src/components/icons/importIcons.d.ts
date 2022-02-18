const content = require.context('./svgs', true, /\.svg$/)
const requireAll = requireContext =>
  requireContext.keys().forEach(requireContext)
try {
  requireAll(content)
} catch (error) {
  console.log(error)
}
