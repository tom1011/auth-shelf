import React, { Component } from 'react';
import { connect } from 'react-redux';
import ViewShelfItem from './ViewShelfItem';

class ViewShelfList extends Component {
    render() {
        return (
            <div>
                <h1>Shelf List</h1>
                <ViewShelfItem />
                {/* map function goes here. */}
            </div>
        )
    };
};

const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps)(ViewShelfList);