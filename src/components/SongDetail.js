import React from 'react';
import { connect } from "react-redux";

const SongDetail = (props) => {
    if(!props.mySelectedSong){
        return(<div>Select A Song.</div>)
    }
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title:{props.mySelectedSong.title}
        <br />
        Duration:{props.mySelectedSong.duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { mySelectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
