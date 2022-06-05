const Cache = require("@11ty/eleventy-cache-assets");

module.exports = async function () {
  try {
    let videos = await Cache(
      `https://youtube.googleapis.com/youtube/v3/search?channelId=UCXpmUxvG37qpckRHdkstf5w&part=snippet,id&order=date&maxResults=20&publishedAfter=2021-01-01T00:00:00Z&publishedBefore=2021-12-31T00:00:00Z&key=${process.env.YOUTUBE_API_KEY}`,
      {
        duration: "1d",
        type: "json",
      }
    );
    return videos;
  } catch (erro) {
    return [];
  }
};
