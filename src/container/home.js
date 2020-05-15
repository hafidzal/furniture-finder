import React, { Component } from 'react';
import Navbar from '../components/navbar';
import Dropdown from '../components/common/dropdown';
import FurnitureList from '../components/furnitureList';

class Home extends Component {
    render() {
        return(
            <div>
                <div className="container-fluid">
                    <div className="row no-gutter">
                        <div className="col-sm">
                            <div className="upper" style={{ backgroundColor: '#ac3b61', height: '0.3rem' }}></div>
                            <Navbar history={this.props.history}/>
                        </div>
                    </div>
                    <div className="row no-gutter">
                        <div className="col-sm">
                            <Dropdown basedOn={{ text: 'Furniture Style', id: '1' }}/>
                        </div>
                        <div className="col-sm">
                            <Dropdown basedOn={{ text: 'Delivery Time', id: '2' }} />
                        </div>
                    </div>
                    <div className="row ml-4">
                        {typeof this.props.match.params.searchQuery === 'undefined' ? <FurnitureList /> : <FurnitureList search={this.props.match.params.searchQuery}/>}
                    </div>
                    <div className="row no-gutter">
                        <div className="col-sm">
                            <div className="lower-footer" style={{ backgroundColor: '#eee2dc', height: '3rem' }}></div>
                            <div className="lower-footer" style={{ backgroundColor: '#e6d4cb', height: '0.5rem' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;