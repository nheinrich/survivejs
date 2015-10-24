import AltContainer from "alt/AltContainer";
import React from "react";
import Lanes from "./Lanes.jsx";
import LaneActions from "../actions/LaneActions";
import LaneStore from "../stores/LaneStore";



export default class App extends React.Component {

  render() {

    return (
      <div>

        <AltContainer
          stores={[LaneStore]}
          inject={
            {items: () => (LaneStore.getState().lanes || [])}
          }
        >
          <Lanes />
        </AltContainer>

        <div className="form">
          <button className="add-lane" onClick={this.addItem}>
            New
          </button>
        </div>

      </div>
    );
  }

  // -------------------------------------------------------------------------


  addItem() {
    LaneActions.create({name: "New Lane"})
  }

}
