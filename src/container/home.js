import React, { Component } from 'react';
import Navbar from '../components/navbar';
import Dropdown from '../components/common/dropdown';
import FurnitureList from '../components/furnitureList';
// import PokemonList from '../components/home/pokemon-list';

class Home extends Component {
    render() {
        return(
            <div>
                <div className="container-fluid">
                    <div className="row no-gutter">
                        <div className="col-sm">
                            <Navbar />
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
                        {/* <div className="col-sm"> */}
                            <FurnitureList />
                        {/* </div> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;