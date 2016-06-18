//basically a container
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
    //specific function for when something loads for the first time
    componentWillMount(){
      this.props.fetchPosts();
    }
    
    renderPosts() {
        return this.props.posts.map((post) => {
            return (
                <li className='list-group-item' key={post.id}>
                    <Link to={'posts/' + post.id}>
                    <span className='pull-xs-right'>{post.categories}</span>
                    <strong>{post.title}</strong>
                    </Link>
                </li>
            );
        });
    }
    
    render() {
        return (
            <div>
                <div className='text-xs-right'>
                    <Link to='/posts/new' className='btn btn-primary'>
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className='list-group'>
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { posts: state.posts.all };
}
/*
function mapDispatchToProps(dispatch) {
    //gives access to this.props.fetchPosts
    return bindActionCreators({ fetchPosts }, dispatch);
 } ---> refactored to { fetchPosts }*/

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);