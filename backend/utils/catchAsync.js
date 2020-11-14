module.exports = cb => {
    return (req, res, next) => {
        cb(req, res, next).catch(next)
    }
}