import React, { Component } from 'react';
import { connect } from 'react-redux';
import ViewShelfItem from './ViewShelfItem';

class ViewShelfList extends Component {
    state = {
        shelfItem: {
            description: '',
            image_url: '',
        },
    }

    addShelfItem = (event) => {
        event.preventDefault();
        this.props.dispatch({type: 'POST_SHELF_INFORMATION', payload: this.state.selfItem})
        this.setState({
            shelfItem: {
                description: '',
                image_url: '',
            }
        });
    }

    handleChangeFor = (propertyName) => (event) => {
        this.setState({
            shelfItem: {
                ...this.state.shelfItem,
                [propertyName]: event.target.value,
            },
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addShelfItem}>
                    <input value={this.state.shelfItem.description} onChange={this.handleChangeFor('description')} placeholder="description"/>
                    <input value={this.state.shelfItem.image_url} onChange={this.handleChangeFor('image_url')} placeholder="image url"/>
                    <input type="submit"></input>
                </form>
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