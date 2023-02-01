import cron from "node-cron";
import Video from "../models/video.js";
import { google } from "googleapis";
import { getApiKey, query } from "../utils/load-env.js";

const scrapeYoutube = () => {
    try {
        console.log('SCRAPPER INITIALIZED');

        let auth = getApiKey();

        
        cron.schedule("*/10 * * * * *", async () => { // Runs every 10 seconds
            try {
                console.log('SCRAPPER IS RUNNING');
                
                const service = google.youtube({
                    version: "v3",
                    auth,
                }); // Initialize the youtube service
                const { data } = await service.search.list({ // Fetch the data from youtube
                    part: ["snippet"],
                    maxResults: 10,
                    order: "date",
                    q: query,
                    type: 'video',
                    publishedAfter: new Date(),
                });

                const { items } = data;

                items.map((item) => {
                    Video.create({ // Create a new video in the db
                        title: item.snippet.title,
                        description: item.snippet.description,
                        channelId: item.snippet.channelId,
                        channelTitle: item.snippet.channelTitle,
                        videoId: item.id.videoId,
                        thumbnails: {
                            default: item.snippet.thumbnails.default,
                            medium: item.snippet.thumbnails.medium,
                            high: item.snippet.thumbnails.high,
                        },
                        publishedAt: item.snippet.publishedAt,
                    });
                });
            } catch (error) {
                auth = getApiKey(true);
                console.log(error);
            }
        });
    } catch (error) {
        console.log(error);
    }
}

export default scrapeYoutube;