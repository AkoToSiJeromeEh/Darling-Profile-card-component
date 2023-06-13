import '../Style/Main.css'
import PropTypes from 'prop-types';
function ProfileCard(props) {
  return (

    <section className='profile-container'>
        <div className='wrapper'>
        <div className='user-cover-container'>
            <img src={props.coverImg} alt="" />
        </div>
        <div className='user-profile-container'>
            <img src={props.profileImg} alt="" />
        </div>
        <div className='user-information-container'>
            <h2>
                {props.userName}
            </h2>
            <span>
                {props.userAge}
            </span>
            <h6>
                {props.userCity}
            </h6>
        
                <hr className='hr' />
        </div>
        
        <div className='user-other-details'>
            <ul className='ul-1'>
                <li>{props.userFollowers}K</li>
                <li>{props.userLikes}K</li>
                <li>{props.userPhotos}K</li>
            </ul>
            <ul className='ul-2'>
                <li>Followers</li>
                <li>Likes</li>
                <li>Photos</li>
            </ul>
        </div>
        </div>
    </section>
  )
}

export default ProfileCard
ProfileCard.propTypes = {
    userName : PropTypes.string.isRequired,
    coverImg: PropTypes.string.isRequired,
    profileImg: PropTypes.string.isRequired,
    userAge : PropTypes.number.isRequired,
    userCity : PropTypes.string.isRequired,
    userFollowers : PropTypes.number.isRequired,
    userLikes : PropTypes.number.isRequired,
    userPhotos : PropTypes.number.isRequired
  };