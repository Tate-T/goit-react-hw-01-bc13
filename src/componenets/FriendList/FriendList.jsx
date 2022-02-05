import FriendListItem from './FriendListItem/FriendListItem';

const FriendList = ({ avatar, name, isOnline }) => {
    return (
        <ul class="friend-list">
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </ul>
    )
}

export default FriendList