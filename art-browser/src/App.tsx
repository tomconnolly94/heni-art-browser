// external dependencies
import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

//internal dependencies
import { Header } from './Components/Header';
import { ArtPieceDisplay } from './Components/ArtPieceDisplay';

export class App extends React.Component{

    render(){
        return <div id="AppContainer">
            <Header/>
            <ArtPieceDisplay/>
        </div>
    }
}
