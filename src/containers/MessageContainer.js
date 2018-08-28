import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Message from './../components/Message';

class MessageContainer extends Component {
    render() {
        var {message} = this.props;
        return (
            <Message 
                message = {message}
            />
        );
    }
}

MessageContainer.propTypes = {
    message : PropTypes.string.isRequired
}
//gọi lên store lấy các state (DS product) --> chuyển thành props của cái component này
const mapStateToProps = state => {
    return {
        message : state.message
    }
}



export default connect(mapStateToProps, null)(MessageContainer);
