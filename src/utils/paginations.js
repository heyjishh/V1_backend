const { allPaginationsJoi } = require('../validation/paginations.validation');
const throwError = require('./exceptions');

const paginations = async (model, query) => {

    allPaginationsJoi.validateAsync(query);

    const page = parseInt(query.page, 10) || 1;
    const limit = parseInt(query.limit, 10) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const resultsData = {};
    console.log(model , "MODEL")
    const total = await model.find().countDocuments();
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
        resultsData.results = await model.find().limit(limit).skip(startIndex).exec();
        resultsData.total = total;
        resultsData.limit = limit;
        resultsData.page = page;
        return resultsData;
    } catch (error) {
        return error
    }
};


module.exports = {
    paginations
};
