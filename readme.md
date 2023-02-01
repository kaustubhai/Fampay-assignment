# Fampay Assignment
### Submitted by [@kaustubhai](https://github.com/kaustubhai)

This repo is inline with the assignment given by Fampay. The assignment is to build a youtube search API scraper, which fetches the details of the videos regarding a particular search keyword. The details are then stored in a database and the user can access the details via a REST API.

## How to get started
**Step 1**: Clone the repo
```bash
git clone https://github.com/kaustubhai/Fampay-assignment.git
```
**Step 2**: Setup the environment variables
```
PORT
GOOGLE_API_KEY
GOOGLE_API_KEY_2
GOOGLE_API_KEY_3
MONGO_URI
```
**Step 3**: Install all the required dependencies
```bash
npm install
```

**Step 4**: Start the server
```bash
npm run server
```

## Accomplished missions
- YouTube API continuous call to scrape the vidoes
- GET API which returns the stored video data in a paginated response
- GET API to search the stored videos using their title and description.
- Dockerized the application
- Support for multiple API keys if quota is exhausted on one
- Optimise search api to perform partial match