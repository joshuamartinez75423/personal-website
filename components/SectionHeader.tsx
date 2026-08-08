export default function SectionHeader({ title }: { title: string }) {
  return (
    <div className="section-head">
      <h2 className="section-title">{title}</h2>
    </div>
  );
}
