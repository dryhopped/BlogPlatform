import React from 'react'

export default class PersonList extends React.Component {

    getPeople() {

        return this.props.people

    }

    render() {

        return (
            <div class="friend-list">
                <ul className="list-unstyled">
                {this.getPeople().map(entry =>
                    <li>{entry.name}</li>
                )}
                </ul>
            </div>
        )

    }

}