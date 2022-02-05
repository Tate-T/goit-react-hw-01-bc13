import s from './Profile.module.css';
import PropTypes from 'prop-types';


const Profile = (props) => {
    const { username, tag, location, avatar, stats } = props;
    return (
        <>
            <h2>TASK 1</h2>
            <div className={s.profile} >
                <div className={s.cardProfile}>
                    <div className={s.description}>
                        <img
                            src={avatar}
                            alt="User avatar"
                            className={s.avatar}
                        />
                        <p className={s.name}>{username}</p>
                        <p className={s.tag}>{tag}</p>
                        <p className={s.location}>{location}</p>
                    </div>
                    <ul className={s.stats}>
                        <li className={s.statsList}>
                            <span className={s.label}>Followers</span> <br />
                            <span className={s.quantity}>{stats.followers}</span>
                        </li>
                        <li className={s.statsList}>
                            <span className={s.label}>Views</span> <br />
                            <span className={s.quantity}>{stats.views}</span>
                        </li>
                        <li className={s.statsList}>
                            <span className={s.label}>Likes</span> <br />
                            <span className={s.quantity}>{stats.likes}</span>
                        </li>
                    </ul>
                </div>
            </div >
        </>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    })
};

export default Profile