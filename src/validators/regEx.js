Object.defineProperty(exports, '__esModule', {
  value: true
})

exports.default = (rule) => {
  return (value) => {
    // 當沒有初始值或空字串時不檢查 避免跟必填或長度衝突
    if (typeof value === 'string' && value.length > 0) return rule.test(value)
    else return true
  }
}
