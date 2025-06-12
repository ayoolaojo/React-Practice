import("./home.css");
function Home() {
  return (
    <div className="home_container">
      <div className="home_container_item" id="home_container_item1">
        <h2>
          I'm a <br />
          <span style={{ color: "#161CAA" }}>web developer</span>
        </h2>
        <button>VIEW PORTFOLIO</button>
      </div>
      <div className="home_container_img" id="home_container_item2">
        <img src="../../../public/Ayodev.jpg" alt="Ayoola" />
      </div>
    </div>
  );
}

export default Home;
