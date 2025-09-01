import profilePic from "./assets/1750670916484-removebg-preview.png"
function Card() {
    return (
        <div className="card">
            <img className="profile-pic" src={profilePic} alt="profile picture" />
            <h2 className="card-title">Byte & Bote</h2>
            <p className="card-text">i like manhwa recap</p>
            <button>
                Card Button
            </button>
        </div>
    )
}

export default Card