import React from 'react';
import { Route, IndexRoute } from 'react-router';
//Route defines match betwenn URL and compnenent
import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

//const Greeting = () => {
//    return <div>Hey tehre!</div>;
//};

//   /       App
//greet      App, Greeting
//greet2     App, Greeting
//greet3     App, Greeting

//IndexRoute is default
export default (
<Route path='/' component={App}>
    <IndexRoute component={PostsIndex} />
    <Route path='posts/new' component={PostsNew} />
    //auto makes this.props.params.id from reactrouter
    <Route path='posts/:id' component={PostsShow} />
</Route>
);
