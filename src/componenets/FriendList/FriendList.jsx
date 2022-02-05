import FriendListItem from './FriendListItem/FriendListItem';
import s from './FriendList.module.css';

const FriendList = (friends) => {
    return (
        <ul className={s.friendList}>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <FriendListItem
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                    id={id}
                />
            ))}
        </ul>
    )
}

export default FriendList