function episodeSlug(episode) {
  return `${episode.id}_${episode.title.replace(/[^a-zA-Z0-9]/g, "-")}`;
}
export { episodeSlug as e };
