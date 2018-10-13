import React, {Component} from 'react';
import {connect} from 'react-redux';

class LibraryList extends Component {

    render() {
        console.log(this.props);
        return;
    }
}


//'state' here is global App (Redux) store
const mapStateToProps = state => {
    return {libraries: state.libraries};
};

export default connect(mapStateToProps)(LibraryList); //redux 'connect' function
