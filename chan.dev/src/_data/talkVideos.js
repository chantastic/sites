const Cache = require("@11ty/eleventy-cache-assets");

module.exports = async function () {
  try {
    let videos = await Cache(
      `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=PLnc_NxpmOxaPBbn1PysP30GB0_8aQGnAa&key=${process.env.YOUTUBE_API_KEY}`,
      {
        duration: "1d",
        type: "json",
      }
    );
    return videos.items;
  } catch (erro) {
    return [];
  }
};
