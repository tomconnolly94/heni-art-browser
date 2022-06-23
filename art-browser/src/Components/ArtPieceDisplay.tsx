import * as React from 'react';
import { ArtPiecePreview } from './ArtPiecePreview';
import { ArtPiecesState } from '../Models/ArtPiecesState';
import { ModelArtPiecePreview } from '../Models/ModelArtPieceDisplay';
import axios from 'axios';

export class ArtPieceDisplay extends React.Component<{}, ArtPiecesState>{
    
    constructor(props: {}) {
        super(props);
    
        // init state
        this.state = {
          items: [],
          firstPage: true,
          lastPage: false,
          pageNumber: 1
        };
    }

    async GetArtPieces(indexAdjustment: number){

        let newPageNumber = this.state.pageNumber + indexAdjustment;
        newPageNumber = newPageNumber < 1 ? 1: newPageNumber;

        const query = `
            query getArtPieces($pageNumber: Int!) {
                ArtPieces(pageNumber: $pageNumber) {
                    title
                    artistName
                    imageURL
                }
            }
          `;

        // These variables are optional, leave empty for now
        const variables = {
            pageNumber: newPageNumber
        };

        let newItems: ModelArtPiecePreview[] = [];

        try {

            const response = await axios.post('http://localhost:8082/api', {
                query,
                variables
            });
            newItems = response.data.data.ArtPieces;
        }
        catch (e) {}

        
        console.log(this.state);
        //save new values
        this.setState({
            pageNumber: newPageNumber,
            firstPage: newPageNumber === 1,
            items: newItems
        });
    }
    
    componentDidMount(){
        this.GetArtPieces(0);
    }

    render(){
        return <div className="ArtPieceDisplayPanel container">
            <h2 className="pageTitle">Prints</h2>
            <div className="row">
                {this.state.items.map((item,index)=>{
                    return <div className="col-sm-4" key={index}>
                            <ArtPiecePreview imageURL={item.imageURL} title={item.title} artistName={item.artistName}/>
                        </div>
                })}
            </div>
            <div className="buttonContainer">
                {!this.state.firstPage ? <button id="PreviousButton" type="button" className="btn btn-outline-info" onClick={(clickEvent) => {this.GetArtPieces(-1)}}>Previous</button>: <></>}
                {!this.state.lastPage ? <button id="NextButton" type="button" className="btn btn-outline-info" onClick={(clickEvent) => {this.GetArtPieces(1)}}>Next</button> : <></>}
            </div>
        </div>
    }
}