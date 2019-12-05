import React from 'react';
import {connect} from 'react-redux';
import {addTodo,showing,hiding} from './actionCreators/actionCreaters';

class AddTodo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            inputVal: ""
        };
        this.changeInput = this.changeInput.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    changeInput(e){
        const newVal = e.target.value;
        this.setState({
            inputVal: newVal
        });
    }

    addTodo(event){
        event.preventDefault();
        this.props.addTodo(this.state.inputVal);
        this.setState({
            inputVal: ""
        });
        this.showing();
        setTimeout(()=>{
          this.hiding();
        },2500);
    }

    showing(){
      this.props.showing(this.state.inputVal);
    }
    hiding(){
      this.props.hiding();
    }




    render() {
        return (
          <div>
            <form
              onSubmit={this.addTodo}>
              <input
                  type="text"
                  value={this.state.inputVal}
                  onChange={this.changeInput} />
              <button>Ekle</button>
              {this.props.visible ? <h2 className="not">Eklendi</h2> : ""}
          </form>

        </div>
      )
    }
}

const mapStateToProps = state => ({
  visible: state.visible
})


const mapDispatchToProps =  dispatch => ({
  addTodo: (newTodo) => {dispatch(addTodo({
      content: newTodo,
      id: Math.random(),
      checked: false
  }))},
  showing: input => {dispatch(showing({
    content: input
  }))},
  hiding: () => {dispatch(hiding())}
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
