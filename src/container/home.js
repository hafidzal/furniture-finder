import React, { Component } from 'react';
import Navbar from '../components/navbar';
import Filter from '../components/filter';
import FurnitureList from '../components/furnitureList';
// import PokemonList from '../components/home/pokemon-list';

class Home extends Component {
    render() {
        return(
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm">
                            <Navbar />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-2">
                            <Filter />
                        </div>
                        <div className="col-sm-10">
                            <FurnitureList />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;