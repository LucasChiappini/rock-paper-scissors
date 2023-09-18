import "../styles/CardProfile.css";
const CardProfile = ({ image, name }) => {
  return (
    <div className="card">
      <img src={image} alt="Avatar" className="card-image" />
      <div className="card-container">
        <h1 className="card-title">CARD PROFILE</h1>
        <p>{name}</p>
        <p className="card-text">🎮Playing...</p>
      </div>
    </div>
  );
};

export default CardProfile;
