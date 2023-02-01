import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const videoSchema = new Schema({
    title: String,
    description: String,
    channelId: String,
    channelTitle: String,
    videoId: {
        type: String,
        index: true,
    },
    thumbnails: {
        default: {
            url: String,
            width: Number,
            height: Number,
        },
        medium: {
            url: String,
            width: Number,
            height: Number,
        },
        high: {
            url: String,
            width: Number,
            height: Number,
        },
    },
    publishedAt: Date,
});

const Video = mongoose.model('Video', videoSchema);
export default Video;