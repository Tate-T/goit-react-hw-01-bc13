import s from './FriendListItem.module.css';
import propTypes from 'prop-types';

const FriendListItem = ({ id, isOnline, avatar, name }) => {
    return (
        <li className={s.item} key={id}>
            <span className={s.status}>{isOnline}</span>
            <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={s.name}>{name}</p>
        </li>
    )
}

FriendListItem.propTypes = {
    id: propTypes.number,
    avatar: propTypes.string,
    name: propTypes.string,
    isOnline: propTypes.bool
}

export default FriendListItem