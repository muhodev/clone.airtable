const AppError = require("../../utils/AppError")

exports.errorUrlHandler = (req, res, next) => {
    const msg = `'[${req.method}] ${req.originalUrl}' böyle bir url bulunamadı.`
    const statusCode = 404

    next(new AppError(msg, statusCode))

}

exports.errorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500
    err.status = err.status || "error"
    err.message = err.message || "Hata oluştu"

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    })
}

