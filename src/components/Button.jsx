import "../styles/Button.css";
// css 가져올때는 프럼 없음

function Button({ children, onClick, color }) {

  const classNames = `button ${color}`;
  return (
    <div className="Button">
      <button onClick={onClick} className={classNames}>
        {" "}
        {/* 수정: onClick 사용 */}
        {children}
      </button>
    </div>
  );
}

export default Button;
