import './App.css';
import Profile from './componenets/Profile/Profile.jsx';
import Statistics from './componenets/Statistics/Statistics.jsx';
import FriendList from './componenets/FriendList/FriendList.jsx';
import TransactionHistory from './componenets/TransactionHistory/TransactionHistory.jsx';
import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

function App() {
  return (
    <>
      <h1>REACT-HOMEWORK 1</h1>
      <Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />;
      <Statistics title="Upload stats" stats={data} />;
      <Statistics stats={data} />;
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </>
  );
}

export default App;
