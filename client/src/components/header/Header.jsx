import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm"> Caminos</span>
        <span className="headerTitleLg">Hukniray </span>
      </div>
      <img
        className="headerImg"
        src="https://wallpaperaccess.com/full/6215770.jpg"
        alt=""
      />
    </div>
  );
}
