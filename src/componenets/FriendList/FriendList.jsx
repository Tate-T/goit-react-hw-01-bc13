import FriendListItem from './FriendListItem/FriendListItem';
import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
    return (
        <>
            <h2>TASK 3</h2>
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
        </>
    )
}

export default FriendList