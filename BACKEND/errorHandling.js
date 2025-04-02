export default function errorLogger(err, req, res, next) {
    const { status = 500, message = "Internal Server Error" } = err;


    console.error(`Error [${status}]: ${message}`, err);

   
    res.status(status).json({
        error: {
            message,
            status
        }
    });
}
