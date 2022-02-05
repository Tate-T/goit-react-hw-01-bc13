import FriendListItem from './FriendListItem/FriendListItem';
import s from './FriendList.module.css';

const FriendList = ({ avatar, name, isOnline }) => {
    return (
        <ul className={s.friendList}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </ul>
    )
}

export default FriendList