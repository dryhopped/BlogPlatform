import React from 'react'
import Header from './Partials/Header'
import PersonForm from './People/PersonForm'
import PersonList from './People/PersonList'

export default class FriendshipTracker extends React.Component {

    getPeople() {

        return this.props.people || []

    }

    render() {

        console.log(this.getPeople())

        return (
            <div className="friendship-tracker">
                <Header />
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <PersonForm />
                            <PersonList people={ this.getPeople() } />
                        </div>
                        <div className="col-md-6">
                            <PersonList people={ this.getPeople() } />
                        </div>
                    </div>
                </div>
            </div>
        )

    }

}