import React, {Component} from 'react';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Single from './Single';




class Main extends Component {
    
/*
    removePhoto(postRemoved) {
        console.log(postRemoved.description);
        this.setState((state) => ({
            // Filtering out the postRemoved post  and updating the state
            posts: state.posts.filter(post => post !== postRemoved)
        }));
    };
    addPhoto(postSubmitted) {
        this.setState(state => ({
            posts: state.posts.concat([postSubmitted])
        }));
    };
*/
    state = {loading: true};

    componentDidMount() {
        this.props.startLoadingPost().then(() => {
            this.setState({loading: false});
        });
        this.props.startLoadingComments();
    };

    render() {
        return (
            <div>
                <h1>
                    <Link to='/'> PhotoWall </Link>
                </h1>
                <Route exact path='/' render={() => (
                    <PhotoWall {...this.props}/>
                )}/>          
                <Route path='/AddPhoto' render={({history}) => (
                    <AddPhoto {...this.props}/>
                )}/>

                <Route path='/single/:id' render={(params) => (
                    <Single loading={this.state.loading} {...this.props} {...params}/>
                )}/>
            </div>
        );
    };
};

export default Main;

