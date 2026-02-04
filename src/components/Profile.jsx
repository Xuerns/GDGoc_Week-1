export default function Profile({ theme, setTheme }) {
  return (
    <div className={`profileContainer ${theme ? "darkContainer" : ""}`}>
      <div className="nameContainer">
        <div className="profile"></div>
        <div>
          <h3>Dida Maesal Maulana</h3>
          <h6>Frontend Developer</h6>
        </div>
      </div>
      <p className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        soluta totam earum corporis recusandae suscipit, voluptatem deleniti ab
        distinctio. Deleniti, porro. Reiciendis debitis ullam facilis sint
        commodi voluptate minus, ipsam tempore ipsum ea expedita, consectetur
        deleniti corporis tempora!
      </p>
      <button className="btn switchBtn" onClick={() => setTheme(!theme)}>
        {theme ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
}
