type SectionHeaderProps = {
  number: string;
  title: string;
};

export default function SectionHeader({ number, title }: SectionHeaderProps) {
  return (
    <div className="section-head">
      <span className="section-num">{number}</span>
      <h2 className="section-title">{title}</h2>
    </div>
  );
}
