import React, { Component } from 'react';
import { connect } from 'react-redux';

class ViewShelfItem extends Component {
    render() {
        return (
            <div>
                <h2>Shelf Item</h2>
                {/* item goes here. */}
            </div>
        )
    };
};

const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps)(ViewShelfItem);