import "../../App.css";
export default function PrimaryButton({
  children,
  onClick,
}) {
  return (
    <button
      className="primaryButton"
      onClick={onClick}
    >
      {children}
    </button>
  );
}