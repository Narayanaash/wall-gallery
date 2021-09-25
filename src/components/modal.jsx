export default function modal({ source, isModal, setmodalSrc }) {
  return (
    isModal && (
      <div className="modal" onClick={() => setmodalSrc("")}>
        <div className="cross"></div>
        {source && (
          <img
            src={source}
            alt="Modal Pop Up"
            onClick={(e) => e.stopPropagation()}
          />
        )}
      </div>
    )
  );
}
