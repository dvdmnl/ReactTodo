import React from 'react';
import {Link} from 'react-router'

class Nav extends React.Component {
    render () {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">
                            React Todo App
                        </li>
                        <li><IndexLink to="/" activeClassName="active-link">Login</IndexLink></li>
                        <li><Link to="/todos" activeClassName="active-link">My Todos</Link></li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <il className="menu-text">
                            Created By <a>David Manela</a>
                        </il>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Nav