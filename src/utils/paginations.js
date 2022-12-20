const { allPaginationsJoi } = require('../validation/paginations.validation');
const throwError = require('./exceptions');

const paginations = async (model, query) => {

    allPaginationsJoi.validateAsync(query);

    const page = parseInt(query.page, 10) || 1;
    const limit = parseInt(query.limit, 10) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const results = {};
    const total = await model.countDocuments();
    if (endIndex < total) {
        results.next = {
            page: page + 1,
            limit: limit
        };
    }
    if (startIndex > 0) {
        results.previous = {
            page: page - 1,
            limit: limit
        };
    }
    try {
        results.results = await model.find().limit(limit).skip(startIndex).exec();
        if(!results.results && results.results.length < 0) return throwError("No Data Found", HttpStatusCode.NOT_FOUND );
        return results;
    } catch (e) {
       return throwError("Something Went Wrong", HttpStatusCode.INTERNAL_SERVER_ERROR, e);
    }
};


module.exports = {
    paginations
};
