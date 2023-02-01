import dotenv from 'dotenv'
dotenv.config()

let currentApiKeyIndex = 0;
const apiKeys = [process.env.GOOGLE_API_KEY, process.env.GOOGLE_API_KEY_2, process.env.GOOGLE_API_KEY_3];

export function getApiKey(exhausted) {
    if (currentApiKeyIndex >= apiKeys.length) {
        console.error('All API keys have been exhausted');
        process.exit(1);
    }

    if(exhausted)
        currentApiKeyIndex += 1;
    const apiKey = apiKeys[currentApiKeyIndex];
    return apiKey;
}


export const PORT = process.env.PORT || 5000
export const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/fampay'
export const query = 'tanmay bhat'