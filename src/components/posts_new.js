import React, {
    Component, PropTypes
}
from 'react';
import {
    reduxForm
}
from 'redux-form';
import {
    createPost
}
from '../actions/index';
import {
    Link
}
from 'react-router';

class PostsNew extends Component {
    //Says hey i want to pull context from parent
    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(props) {
        this.props.createPost(props)
            .then(() => {
                //blog post has been created, navigate the user to the index
                //We navigate by calling this.context.router.push with the new path to navigate to.
                this.context.router.push('/');
            });
    }

    render() {
        const {
            fields: {
                title, categories, content
            },
            handleSubmit
        } = this.props;
        console.log(title);
        //same as const title = this.props.fields.title; 
        //const handleSubmit = this.props.handleSubmit;
        return ( < form onSubmit = {
                handleSubmit(this.onSubmit.bind(this))
            } >
            < h3 > Create a New Message < /h3> < div className = {
                `form-group ${title.touched && title.invalid ? 'has-danger' : ''}`
            } >
            < label > Message < /label> < input type = 'text'
            className = 'form-control' {...title
            }
            /> < div className = 'text-help' > {
                title.touched ? title.error : ''
            } < /div> < /div>

            < div className = {
                `form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`
            } >
            < label > Name < /label> < input type = 'text'
            className = 'form-control' {...categories
            }
            /> < div className = 'text-help' > {
                categories.touched ? categories.error : ''
            } < /div> < /div>

            < div className = {
                `form-group ${content.touched && content.invalid ? 'has-danger' : ''}`
            } >
            < label > Comments < /label> < textarea className = 'form-control' {...content
            }
            /> < div className = 'text-help' > {
                content.touched ? content.error : ''
            } < /div> < /div>


            < button type = 'submit'
            className = 'btn btn-primary' > Submit < /button> < Link to = '/'
            className = 'btn btn-primary' > Cancel < /Link> < /form>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        //goes into title.error
        errors.title = 'Enter a Message';
    }
    if (!values.categories) {
        errors.categories = 'Enter your name';
    }
    if (!values.content) {
        //goes into title.error
        errors.content = 'Enter some comments';
    }

    return errors;
}

//connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
//reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

//reduxForm handles global app state (this.props) and everything that gets connected
export default reduxForm({
    form: 'PostsNewForm',
    fields: ['title', 'categories', 'content'],
    validate
}, null, {
    createPost
})(PostsNew);