import Loading from "./Loading";

export default function modal({ source, setisModal }) {
  return (
    <div className="modal" onClick={() => setisModal(false)}>
      <div className="cross"></div>
      {source && (
        <img
          src={source}
          alt="Modal Pop Up"
          onClick={(e) => e.stopPropagation()}
        />
      )}
    </div>
  );
}
