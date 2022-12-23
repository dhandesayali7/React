import React from 'react'

class TodosHeader extends React.Component{
    componentDidUpdate(prevProps){
        var red   = Math.floor(Math.random() * 256);
        var green = Math.floor(Math.random () * 256);
        var blue  = Math.floor(Math.random () * 256);
        
        var bgColor = `rgb(${red}, ${green}, ${blue})`;
        
        if( prevProps.headerSpan  !== this.props.headerSpan){
            document.getElementById("inHd").innerHTML = "Class Based Life Cycle Hook";
            document.getElementById("inHd").style.backgroundColor = bgColor;
        }
    }
    render() {
        return(
            <div>
                <h4>Welcome to<span id="inHd"></span></h4>
            </div>
        )
    }
}
export default TodosHeader ;