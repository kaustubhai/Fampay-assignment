import { fetchVideosService, filterVideosService } from "../service/index.js";
import createResp from "../utils/createResp.js";

// @Path: /api/fetch
// @Method: GET
// @Body: { page, limit }
// @Desc: Fetches the videos from the db, paginated
const fetchVideos = async (req, res) => {
    try {
        const { page, limit } = req.body;
        if(!limit || !page) return res.json(createResp(false, "Limit and page are required"));
        const videos = await fetchVideosService(page, limit) // DB Call
        res.json(createResp(true, "Successfully fetched the videos", videos));
    } catch (error) {
        console.log(error);
        res.json(createResp(false, "Internal Error"))
    }
}

// @Path: /api/search
// @Method: GET
// @Query: { q }
// @Desc: Filters the DB for the videos with the query
const filterVideos = async (req, res) => {
    try {
        const { q } = req.query;
        if(!q) return res.json(createResp(false, "Query is required"));
        const videos = await filterVideosService(q) // DB Call
        res.json(createResp(true, "Successfully fetched the videos", videos));
    } catch (error) {
        console.log(error);
        res.json(createResp(false, "Internal Error"))
    }
}

export {
    fetchVideos,
    filterVideos
};