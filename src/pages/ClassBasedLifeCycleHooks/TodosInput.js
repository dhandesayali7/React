import React, { Component } from 'react';

class TodosInput extends Component{
    state ={
        title :""
    }

    handleChange = event =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = event =>{
        event.preventDefault ();
        this.props.addTodoProps(this.state.title);
        this.setState({
            title:""
        })
    }

    render() {
        return(
            <div className="row">
                <div className="col-12">
                    <form onSubmit={this.handleSubmit}>
                          <input type="text" className='form-control mb-3'
                          placeholder='enter any item' value={this.state.title}
                           name="title" onChange={this.handleChange}/>
                          <button type='submit' className="btn btn-primary"
                          >Submit</button>
                          
                          
                          </form>
                </div>
            </div>
        )
            
        
    }
}
export default TodosInput;