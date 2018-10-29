import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';
import {Link} from 'react-router-dom';

// props are immutable
// states are mutable

// anchor tag, href attribute
// Allows you to create hyperlinks between pages

// Stateless functional component
// Only used when render() is the only method used in class
function PhotoWall(props) {
    return (
        <div>
            <Link className='add-icon' to='/AddPhoto'></Link>
            <div className='photo-grid'>
                {props.posts
                    .sort(function(x, y) {
                        return y.id - x.id  // Descending order
                    })
                    .map((post, index) => <Photo key={index} post={post} {...props} index={index}/>)}
            </div>
        </div>
    );
};

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired
}

export default PhotoWall;