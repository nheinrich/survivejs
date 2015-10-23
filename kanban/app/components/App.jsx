import React from "react";
import uuid from "node-uuid";
import Notes from "./Notes.jsx";
import NoteActions from "../actions/NoteActions";
import NoteStore from "../stores/NoteStore";


export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.storeChanged = this.storeChanged.bind(this);
    this.state = NoteStore.getState()
  }


  // -------------------------------------------------------------------------

  componentDidMount() {
    NoteStore.listen(this.storeChanged);
  }

  componentWillUnmount() {
    NoteStore.unlisten(this.storeChanged);
  }

  storeChanged(state) {
    this.setState(state);
  }

  addNote() {
    NoteActions.create({task: "New Task"})
  }

  deleteNote(id) {
    NoteActions.delete(id)
  }

  editNote(id, task) {
    NoteActions.update({id, task})
  }


  // -------------------------------------------------------------------------

  render() {
    const notes = this.state.notes

    return (
      <div>
        <Notes
          items={notes}
          onEdit={this.editNote}
          onDelete={this.deleteNote}
        />
        <div className="form">
          <button className="add-note" onClick={this.addNote}>
            New
          </button>
        </div>

      </div>
    );
  }



}
