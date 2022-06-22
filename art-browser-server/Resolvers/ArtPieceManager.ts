import axios from 'axios';
import { query } from 'express';
import { ArtDataItem } from '../Types/ArtDataItem';
import { ArtPiece } from '../Types/ArtPiece';

export class ArtPieceManager{

    static GetQueryParams(pageNumber: number){
        return { 
            params: {
                page: pageNumber,
                hasimage: 1,
                classification: "Prints",
                sort: "rank",
                sortorder: "desc",
                "q": "verificationlevel:4",
                apikey: process.env.APIKEY,
            }
        }
    }
    
    static GetQueryURL(){
        return 'https://api.harvardartmuseums.org/object';
    }

    static TranslateResponseToRecords(artDataItems: [ArtDataItem]){
        const records: ArtPiece[] = [];
     
        artDataItems.forEach(function(dataItem: ArtDataItem){

            console.log(`title: ${dataItem.title}`);
            console.log(`primaryimageurl: ${dataItem.primaryimageurl}`);

            // the "hasimage: 1," query param above should ensure that every item 
            // returned has an image however there seems to be a mistakes e.g. for the piece
            // titled "Dufour and his Beautiful Donna Rosa" which has imagecount = 1
            // but has no images. This if statement will filter all items like this out.
            if(dataItem.primaryimageurl == null) return;
     
           let formattedItem : ArtPiece = {
              imageURL: `${dataItem.primaryimageurl}?height=300`,
              title: dataItem.title,
              artistName: dataItem.people[0].displayname,
           }
     
           records.push(formattedItem);
        });
        return records;
    }

    static async GetArtPieces(args: { pageNumber: number; }) {

        let url = ArtPieceManager.GetQueryURL();
        let queryParams = ArtPieceManager.GetQueryParams(args.pageNumber);

        // server logs for transparency
        console.log(`Sending query to ${url}`);
        console.log(`Query params: ${JSON.stringify(queryParams)}`);
        console.log(`Request page ${args.pageNumber}`);
    
        try {
            let apiResponse = await axios.get(url, queryParams);
            return ArtPieceManager.TranslateResponseToRecords(apiResponse.data.records);
        } catch (exception) {
            process.stderr.write(`ERROR received from ${url}: ${exception}\n`);
            return []
        }
    }
}