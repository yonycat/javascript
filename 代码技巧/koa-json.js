function toJson() {
  return function (json) {
    let ctx = this
    ctx.type = 'application/json'
    ctx.body = json
  }
}

module.exports = () => {
  return async (ctx, next) => {
    if (!ctx.json) {
      ctx.json = toJson()
    }
    await next()
  }
}
