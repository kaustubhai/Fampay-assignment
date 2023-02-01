import Video from "../models/video.js";

const fetchVideosService = (skip, limit) => {
    return new Promise((resolve, reject) => {
        Video.find({}).skip(skip).limit(limit).sort({ publishedAt: -1 }).exec((err, videos) => {
            if(err) return reject(err);
            resolve(videos);
        })
    })
}

const filterVideosService = (q) => {
    return new Promise((resolve, reject) => {
        Video.find({
            $or: [
                    { title: { $regex: q, $options: "i" } },
                    { description: { $regex: q, $options: "i" } },
            ]
        }).exec((err, videos) => {
            if(err) return reject(err);
            resolve(videos);
        })
    })
}

export {
    fetchVideosService,
    filterVideosService
};