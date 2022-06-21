import axios from 'axios';
import { ArtDataItem } from '../Types/ArtDataItem';
import { ArtPiece } from '../Types/ArtPiece';

export class ArtPieceManager{

    static GetQueryParams(pageNumber: number){
        return { 
            params: {
                page: pageNumber,
                apikey: process.env.APIKEY,
            }
        }
    }
    
    static GetQueryURL(){
        return 'https://api.harvardartmuseums.org/object?classification=Prints';
    }

    static TranslateResponseToRecords(artDataItems: any){
        const records: ArtPiece[] = [];
     
        artDataItems.forEach(function(dataItem: ArtDataItem){
     
           let formattedItem : ArtPiece = {
              imageURL: dataItem.primaryimageurl,
              title: dataItem.title,
              artistName: dataItem.people[0].displayname,
           }
     
           records.push(formattedItem);
        });
        return records;
    }

    static async GetArtPieces(args: { pageNumber: number; }) {

        var url = ArtPieceManager.GetQueryURL();
        console.log(`Sending query to ${url}`);
        console.log(`Request page ${args.pageNumber}`)
    
        try {
            let apiResponse = await axios.get(url, ArtPieceManager.GetQueryParams(args.pageNumber));
            return ArtPieceManager.TranslateResponseToRecords(apiResponse.data.records);
        } catch (exception) {
            process.stderr.write(`ERROR received from ${url}: ${exception}\n`);
            return []
        }
    }
}