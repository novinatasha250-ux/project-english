import "../../styles/section-header.css";
export default function SectionHeader({
  icon: Icon,
  title,
  subtitle
}) {
  return (
    <div className="sectionHeader">

      <div className="sectionHeaderIcon">
        <Icon size={22} />
      </div>

      <div>
        <h2>{title}</h2>

        {subtitle && (
          <p>{subtitle}</p>
        )}
      </div>

    </div>
  );
}