export default function({ code, ...props }) {
  return (
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube-nocookie.com/embed/${code}`}
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  );
}
