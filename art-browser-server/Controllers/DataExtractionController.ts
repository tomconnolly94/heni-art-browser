import { ArtDataItem } from "../Types/ArtDataItem";
import { ArtPiece } from "../Types/ArtPiece";

// This function takes a list of data items from the harvard api and extracts the relevant data
// returning a list of new ArtPiece items which match the GraphQL schema
function TranslateResponseToRecords(artDataItems: ArtDataItem[]){
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