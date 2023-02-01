const createResp = (success, message, data = null) => {
    return {
        success,
        message,
        data,
    }
}

export default createResp;