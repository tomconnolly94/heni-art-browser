import * as React from 'react';
import { ModelArtPiecePreview } from '../Models/ModelArtPieceDisplay';

export class ArtPiecePreview extends React.Component<ModelArtPiecePreview, {}>{

    render(){
        return <div className="ArtPiecePreview" data-testid="ArtPiecePreview">
            <img alt="image" src={this.props.imageURL} data-testid="image"/>
            <h4 data-testid="title">{this.props.title}</h4>
            <p data-testid="artist-name">{this.props.artistName}</p>
        </div>
    }
}
