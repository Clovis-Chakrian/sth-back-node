const errorHandlerMiddleware = (err, req, res, next) => {
    console.error({
        message: 'An error ocurred',
        error: err
    });

    res.status(500).json({
        message: 'Ocorreu um erro',
        error: err?.message ?? "Não foi possível identificar o erro."
    });
}

export { errorHandlerMiddleware };