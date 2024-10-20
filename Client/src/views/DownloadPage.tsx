import "../style.css";

function DownloadPage() {
  return (
    <div>
      <div className="genericContainer">
        <h1>Download</h1>
        <p>
          The game is still undergoing development, you can get what's made of
          the game by now on GitHub.
        </p>
        <a href="https://github.com/DrYonatan/DanganronpaArmy">
          Get The Game From GitHub
        </a>
        <p></p>
        <img
          src="https://ps.w.org/easy-digital-downloads-free-link/assets/icon-256x256.png?rev=2590621"
          style={{ height: "200px", width: "200px", borderRadius: "10px" }}
        ></img>
      </div>
    </div>
  );
}

export default DownloadPage;
