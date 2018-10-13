import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {

    renderItem(library) {
        // console.log('library: ', library);
        return <ListItem library={library.item}/>
    }

    render() {
        return (
            <FlatList renderItem={this.renderItem}
                      data={this.props.libraries}
                      keyExtractor={(library) => library.id + ''}
            />
        );
    }
}


//'state' here is global App (Redux) store
const mapStateToProps = state => {
    return {libraries: state.libraries};
};

export default connect(mapStateToProps)(LibraryList); //redux 'connect' function
