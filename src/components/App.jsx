import { Profile } from './profile/profile';
import { Stats } from './statistics/statistics';
import { FriendList } from './friendlist/friendlist';
import { TransactionHistory } from './transactionhistory/transactionhistory';

export const App = () => {
  return (
    <>
      <Profile />
      <Stats />
      <FriendList />
      <TransactionHistory />
    </>
  );
};
