import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

function AdminPanel() {
    return (
        <div>
            <h1> Admin dashboard </h1>
            <button><Link to="/adminnewsfeed"> Overview </Link></button>
            <button><Link to="/create"> Add news </Link></button>
        </div>
    )
}

export default withRouter(AdminPanel)
