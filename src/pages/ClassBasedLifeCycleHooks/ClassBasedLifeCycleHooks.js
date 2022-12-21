import React from "react";
import TodosContainer from "./TodosContainer";

const ClassBasedLifeCycleHooks = () => {
    return(
        <div className="row">
            <div className="col-sm-12 main__content">
                <h3>Class Based Life Cycle Hooks</h3>

                <hr />

                <TodosContainer />
            </div>
        </div>
    )
}

export default ClassBasedLifeCycleHooks;