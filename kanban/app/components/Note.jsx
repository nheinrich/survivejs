// import React from "react";

// export default class Note extends React.Component {

//   // -------------------------------------------------------------------------

//   constructor(props) {
//     super(props);

//     this.checkEnter = this.checkEnter.bind(this);
//     this.startEdit = this.startEdit.bind(this);
//     this.finishEdit = this.finishEdit.bind(this);
//     this.renderEdit = this.renderEdit.bind(this);
//     this.renderTask = this.renderTask.bind(this);

//     this.state = {
//       editing: false
//     }
//   }


//   // -------------------------------------------------------------------------

//   render() {
//     const editing = this.state.editing;
//     return (
//       <div>
//         {editing ? this.renderEdit() : this.renderTask()}
//       </div>
//     );
//   }


//   // -------------------------------------------------------------------------

//   checkEnter(e) {
//     if (e.key === "Enter") {
//       this.finishEdit(e);
//     }
//   }

//   startEdit() {
//     this.setState({
//       editing: true
//     })
//   }

//   finishEdit(e) {
//     this.props.onEdit(e.target.value)
//     this.setState({
//       editing: false
//     })
//   }

//   renderDelete() {
//     return (
//       <button className="delete" onClick={this.props.onDelete}>
//         X
//       </button>
//     )
//   }

//   renderEdit() {
//     return (
//       <input type="text"
//         autoFocus={true}
//         defaultValue={this.props.task}
//         onBlur={this.finishEdit}
//         onKeyPress={this.checkEnter}
//       />
//     )
//   }

//   renderTask() {
//     const onDelete = this.props.onDelete;
//     return (
//       <div onClick={this.startEdit}>
//         {this.props.task}
//         {onDelete ? this.renderDelete() : null}
//       </div>
//     )

//   }
// }
