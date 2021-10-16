import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

function AdminPanel() {
    return (
        <div>
            <h1> Admin dashboard </h1>
            <Link to="/adminnewsfeed"> <button> See news </button> </Link>
            <Link to="/createNews"> <button> Add news </button> </Link>
            <Link to="/admineventfeed"> <button> See events </button> </Link>
            <Link to="/createevent"> <button> Add Event </button> </Link>
        </div>
    )
}

export default withRouter(AdminPanel)
