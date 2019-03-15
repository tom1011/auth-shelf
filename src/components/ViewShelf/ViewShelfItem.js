import React, { Component } from 'react';
import { connect } from 'react-redux';

class ViewShelfItem extends Component {
    render() {
        return (
            <tr key={this.props.item.id}>
                <td>{this.props.item.description}</td>
                <td>{this.props.item.image_url}</td>
                <td><button>Delete</button></td>
            </tr>
        )
    };
};

const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapStateToProps)(ViewShelfItem);