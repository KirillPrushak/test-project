import "./index.scss";

function ButtonDelete() {
  return (
    <div className="button-add">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="minus-icon"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
      </svg>
    </div>
  );
}

export default ButtonDelete;
