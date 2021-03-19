import React from 'react';
import {NavLink} from 'react-router-dom';

// import { accountService } from '_services';

function Nav() {
    /*
    const [account, setAccount] = useState(null);
    useEffect(() => {
        userService.account.subscribe(x => setAccount(x));
    }, []);

    // only show nav when logged in
    if (!account) return null;
    */

    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="navbar-nav">
                <NavLink exact to="/" className="nav-item nav-link">Login</NavLink> |
                <NavLink exact to="/scan" className="nav-item nav-link">Scan</NavLink>
                { /* <button className="btn btn-link nav-item nav-link" onClick={ userService.logout }>Logout</button> */}
            </div>
        </nav>
    );
}

export {Nav};
