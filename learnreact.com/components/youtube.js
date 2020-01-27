export function Embed({ src = "", ...props }) {
  return (
    <iframe
      width="560"
      height="315"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen
      src={src}
      {...props}
    ></iframe>
  );
}
