import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../store/actions';

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
      console.log("this.props = ")
      console.dir(this.props);
        return <div>Post List</div>;
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts };
}

export default connect(mapStateToProps, {fetchPosts})(PostList);