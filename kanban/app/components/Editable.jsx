import React from "react";

export default class Editable extends React.Component {

  // -------------------------------------------------------------------------

  constructor(props) {
    super(props);

    this.checkEnter = this.checkEnter.bind(this);
    this.startEdit = this.startEdit.bind(this);
    this.finishEdit = this.finishEdit.bind(this);
    this.renderEdit = this.renderEdit.bind(this);
    this.renderValue = this.renderValue.bind(this);

    this.state = {
      editing: false
    }
  }


  // -------------------------------------------------------------------------

  render() {
    const {value, onEdit, onDelete, ...props} = this.props
    const editing = this.state.editing;

    return (
      <div {...props}>
        {editing ? this.renderEdit() : this.renderValue()}
      </div>
    );
  }


  // -------------------------------------------------------------------------

  checkEnter(e) {
    if (e.key === "Enter") {
      this.finishEdit(e);
    }
  }

  startEdit() {
    this.setState({
      editing: true
    })
  }

  finishEdit(e) {
    this.props.onEdit(e.target.value)
    this.setState({
      editing: false
    })
  }

  renderDelete() {
    return (
      <button className="delete" onClick={this.props.onDelete}>
        X
      </button>
    )
  }

  renderEdit() {
    return (
      <input type="text"
        autoFocus={true}
        defaultValue={this.props.value}
        onBlur={this.finishEdit}
        onKeyPress={this.checkEnter}
      />
    )
  }

  renderValue() {
    const onDelete = this.props.onDelete;
    return (
      <div>
        <span className="value" onClick={this.startEdit}>
          {this.props.value}
        </span>
        {onDelete ? this.renderDelete() : null}
      </div>
    )

  }
}
