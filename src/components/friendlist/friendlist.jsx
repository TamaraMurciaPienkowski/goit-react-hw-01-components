import friends from './friends';
import PropTypes from 'prop-types';
import css from './friendlist.module.css';

const friendsArray = friends;

const Pales = () => {
  return (
    <div className={css.wrapper}>
      <ul className={css.friendList}>
        {friendsArray.map(pale => (
          <li key={pale.id} className={css.friendListItem}>
            {pale.isOnline === true ? (
              <span className={css.paleIsOnline}>{pale.isOnline}</span>
            ) : (
              <span className={css.paleIsOffline}>{pale.isOnline}</span>
            )}
            <img
              className={css.avatar}
              src={pale.avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.name}>{pale.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const FriendList = props => {
  return <Pales />;
};

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
