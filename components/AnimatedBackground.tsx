export default function AnimatedBackground() {
  return (
    <div className="bg-canvas" aria-hidden="true">
      <div className="bg-blob bg-blob--blue" />
      <div className="bg-blob bg-blob--green" />
      <div className="bg-blob bg-blob--teal" />
    </div>
  );
}
