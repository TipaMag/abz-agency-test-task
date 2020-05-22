import React, { useState, useEffect } from 'react'
import './App.sass'
import { api } from './api/api'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import About from './components/About/About'
import Users from './components/Users/Users'
import Registration from './components/Registration/Registration'

const App = () => {

  let [usersData, setUsersData] = useState({
    users: [],
    links: {},
  })
  useEffect(() => {
    getUsersData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getUsersData = async () => {
    const { users, links } = await api.getUsers()
    setUsersData({
      users: users.sort(byField("registration_timestamp")),
      links: links
    })
  }
  const getNewUsers = async () => {
    const { users, links } = await api.getUsers(usersData.links.next_url)
    setUsersData({
      users: [...usersData.users, ...users].sort(byField("registration_timestamp")),
      links: links
    })
  }
  const byField = (field) => {
    return (a, b) => a[field] < b[field] ? 1 : -1;
  }

  return (
    <div className="app">
      <Header />
      <Banner />
      <About />
      <Users usersData={usersData} getNewUsers={getNewUsers} />
      <Registration getUsersData={getUsersData}/>
    </div>
  );
}

export default App
