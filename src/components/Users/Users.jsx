import React from 'react'
import './users.sass'

import Card from './Card/Card'
import Button from '../../elements/button/button'


const Users = ({usersData, getNewUsers}) => {
    
    return (
        <section className="users" id="users">
            <h1 className="users__title">Our cheerful users</h1>
            <div className="users__list">
                {usersData.users
                    && usersData.users.map(user => (
                        <Card key={user.id} user={user} />
                    ))
                }
            </div>
            {usersData.links.next_url
                && <Button handleClick={getNewUsers}
                        label='Show more'
                        styleType='btn__primary'
                        position="center"
                    />
            }
        </section>
    )
}

export default Users