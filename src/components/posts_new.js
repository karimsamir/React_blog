import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';


class PostsNew extends Component {

  renderField(field){
// do short cut for field.meta.error and field.meta.touched
  const {meta : {touched, error }} = field;
  const className = `form-group ${touched && error ? 'has-danger': ''}`
    return(
      <div className={className}>
      <label>{field.label}</label>
        <input className="form-control"
        type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error: ''}
        </div>
      </div>
    );
  }

  onSubmit(values){

    console.log(values);
    this.props.createPost(values, () =>{
      this.props.history.push("/");
    });
  }

  render() {
      const {handleSubmit} = this.props;
    return (
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
        <Field label="Title" name="title" component={this.renderField} />
        <Field label="Categories" name="categories" component={this.renderField} />
        <Field label="Content" name="content" component={this.renderField} />

        <button type="submit" className="btn btn-primary">Save</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values){
  const errors = {};
  // validate the inputs from values

  // if(values.title.length < 3 ){
  //   errors.title = "Enter a valid title that at least 3 characters!";
  // }

  if(!values.title){
    errors.title = "Enter a valid title!";
  }

  if(!values.categories){
    errors.categories = "Enter some categories!";
  }

  if(!values.content){
    errors.content = "Enter some content!";
  }
// if errors is empty the form is fine to submit
// if errors has any properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  validate: validate,
  form: 'PostsNewForm'
})
  (
  connect(null, {createPost})(PostsNew)
  );
