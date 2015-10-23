import React from "react";
import uuid from "node-uuid";
import Notes from "./Notes.jsx";
import NoteActions from "../actions/NoteActions";
import NoteStore from "../stores/NoteStore";
import connect from "../decorators/connect"


@connect(NoteStore)

export default class App extends React.Component {

  render() {
    const notes = this.props.notes

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

  // -------------------------------------------------------------------------


  addNote() {
    NoteActions.create({task: "New Task"})
  }

  deleteNote(id) {
    NoteActions.delete(id)
  }

  editNote(id, task) {
    NoteActions.update({id, task})
  }

}
