import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom';
import queryString from 'query-string';

const App10 = () => {
    return (
        <BrowserRouter>
            <div>
                <h1>App10</h1>

                <ul>
                    <li>
                        <NavLink
                            exact
                            to="/about/"
                            activeStyle={navActiveStyle}
                        >
                            about
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            exact
                            to="/about/company/"
                            activeStyle={navActiveStyle}
                        >
                            about company
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            exact
                            to="/profile/"
                            activeStyle={navActiveStyle}
                        >
                            profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/weblog/" activeStyle={navActiveStyle}>
                            weblog
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/hello/" activeStyle={navActiveStyle}>
                            hello
                        </NavLink>
                    </li>
                </ul>
                <Switch>
                    <Route exact path="/about/" component={AboutPage} />
                    <Route
                        exact
                        path="/about/company"
                        component={AboutCompanyPage}
                    />
                    <Route exact path="/profile/" component={ProfilePage} />
                    <Route path="/weblog/:post_id/" component={PostDetail} />
                    <Route path="/weblog/" component={PostList} />
                    <Route component={RouteNoMatch} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

const navActiveStyle = {
    fontWeight: 'bold',
    backgroundColor: 'yellow',
};

// /about/
const AboutPage = ({ history, location, match }) => {
    return (
        <div>
            <h2>AboutPage</h2>
        </div>
    );
};

// /about/comapny/
const AboutCompanyPage = ({ history, location, match }) => {
    return (
        <div>
            <h2>AboutCompanyPage</h2>
        </div>
    );
};

// /profile/
const ProfilePage = ({ location }) => {
    const { token } = queryString.parse(location.search);
    return (
        <div>
            <h2>ProfilePage</h2>
            token: {token}
        </div>
    );
};

// /weblog/
const PostList = ({ history, location, match }) => {
    return (
        <div>
            <h2>PostList</h2>
            <ul>
                <li>
                    <Link to={`${match.url}100/`}>100??? ?????????</Link>
                </li>
                <li>
                    <Link to={`${match.url}101/`}>101??? ?????????</Link>
                </li>
            </ul>
        </div>
    );
};

const PostDetail = ({ match }) => {
    const {
        params: { post_id },
    } = match;

    const [post, setPost] = useState();
    useEffect(() => {
        console.log(`get post detail api ??????: ${post_id}`);
        setPost({
            title: `????????? ${post_id}`,
            content: `????????? ${post_id} ??????`,
        });
    }, [post_id]);

    return (
        <div>
            <h2>PostDetail #{post_id}</h2>
            {JSON.stringify(post)}
        </div>
    );
};

const RouteNoMatch = ({ location }) => {
    return <div>????????? ????????? ?????? ???????????????. ({location.pathname})</div>;
};

export default App10;
