import React from "react";

class TodosItem extends React.Component {
    
    render() {
        const {  id, title, completed } = this.props.todo;

        return(
            <li className="list-group-item list-group-item-action">
               <input type= "checkbox" checked={completed} className="me-3" onChange={
                () => this.props.handleChangeProps(id)
               }/>
                <span className="me-3">{title}</span>
                <button type="button" className="btn btn-danger" 
            onClick={()=> this.props.deleteTodoProps(id)}>Delete</button>
                
            </li>
        );
    }
}

export default TodosItem; 