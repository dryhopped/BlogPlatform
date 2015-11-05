import React from 'react'

export default class Header extends React.Component {

    render() {

        return (
            <nav className="navbar navbar-inverse navbar-static-top">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand">Friendship Tracker</a>
                    </div>
                </div>
            </nav>
        )

    }

}