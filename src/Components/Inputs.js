import React from 'react';
import '../Styles/Inputs.css';

export class TextInput extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isFocus: false,
    }
  }

  toggleFocus(isFocus){
    let newFocus = typeof isFocus === 'boolean' ? isFocus : !this.state.isFocus;
    this.setState({
      isFocus: newFocus
    });
  }

  render(){
    let extraClass = this.state.isFocus ? 'focus' : '';
    extraClass += this.props.hasError ? 'error' : '';
    return(
      <div className={`text-input input ${extraClass}`}>
        <label>{this.props.title}</label>
        <input
          type='text'
          onFocus={()=>this.toggleFocus(true)}
          onBlur={()=>this.toggleFocus(false)}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.onChange}/>
      </div>
    )
  }
}

// there exist a input checkbox but i rather make a custom one
// much simpler though, it's either checked or not (no value)
export function CheckBox(props){
  const checkedClass = props.isChecked ? 'checked' : '';
  return(
    <div className='checkbox'>
      <div
        onClick={props.onClick}
        className={`check ${checkedClass}`}></div>
      {props.text}
    </div>
  )
}