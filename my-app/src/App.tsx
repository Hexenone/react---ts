import './App.css'

import Counter from './components/Counter/Counter';
import Header from './components/Header/Header';
import PostList from './components/PostList/PostList';
import UserCard from './components/UserCard/UserCard';
import type { User } from './components/UserCard/UserCard';

const usersData: User[] = [
  { id: 1, name: 'Иван', email: 'ivan@example.com' },
  { id: 2, name: 'Мария', email: 'maria@example.com' },
  { id: 3, name: 'Павел', email: 'pavel@example.com' },
  { id: 4, name: 'Анна', email: 'anna@example.com' },
];

function App() {
  return (
    <>
      <Header title="Здравствуй!"/>

      <Counter/>

      <UserCard users={usersData}/>
    </>
  )
}

export default App
