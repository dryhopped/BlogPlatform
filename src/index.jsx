import React from 'react'
import ReactDOM from 'react-dom'
import FriendshipTracker from './components/FriendshipTracker'
import uuid from 'node-uuid'

const people = [
    { id: uuid.v4(), name: 'Luke Scalf', avatar: 'dog' },
    { id: uuid.v4(), name: 'Alyssa Scalf', avatar: 'sexy' }
]

ReactDOM.render(
    <FriendshipTracker people={ people } />,
    document.querySelector('#application')
)