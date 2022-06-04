const element = (
  // Write your code here.
  <div className="congrats-bg-container">
    <h1 className="heading">Congratulations</h1>
    <div className="congrats-card-container">
      <img
        className="logo"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <h1 className="profile-name">Kiran V</h1>
      <p className="profile-description">
        Vishnu Institute of computer Education and Technology Bhimavaram
      </p>
      <img
        className="logo"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
