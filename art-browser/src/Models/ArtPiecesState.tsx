import { ModelArtPiecePreview } from "./ModelArtPieceDisplay";

export interface ArtPiecesState {
    items: ModelArtPiecePreview[];
    firstPage: boolean,
    lastPage: boolean,
    pageNumber: number
}