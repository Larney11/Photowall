import React, {Component} from 'react';

class Comments extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(event) {
        // Prevents refresh page default
        event.preventDefault();
        const comment = event.target.elements.comment.value;
        this.props.startAddingComment(comment, this.props.id);
        event.target.elements.comment.value = "";
    };

    render() {
        return (
            <div className='comments'>
                {
                    this.props.comments.map((comment, index) => {
                        return (
                            <p key={index}> {comment} </p>
                        )
                    })
                }
                <form className='comment-form' onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='Leave a comment...' name='comment'/>
                    <input type='submit'/>
                </form>
            </div>
        );
    };
};

export default Comments;