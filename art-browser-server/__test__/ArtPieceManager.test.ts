import 'jest';
import { ArtPieceManager } from '../Resolvers/ArtPieceManager';
import { ArtDataItem } from '../Types/ArtDataItem';
import { ArtPiece } from '../Types/ArtPiece';

describe('Environment', () => {
    let instance: ArtPieceManager;

    beforeEach(() => {
        instance = new ArtPieceManager();
    });

    it('should test ArtPieceManager GetQueryURL function', async () => {
      expect(instance).toBeInstanceOf(ArtPieceManager);
      expect(ArtPieceManager.GetQueryURL()).toEqual("https://api.harvardartmuseums.org/object");
    });

    it('should test ArtPieceManager GetQueryParams function', async () => {
      expect(ArtPieceManager.GetQueryParams(5)).toEqual({
        params: {
          page: 5,
          hasimage: 1,
          classification: "Prints",
          sort: "rank",
          sortorder: "desc",
          "q": "verificationlevel:4",
          apikey: process.env.APIKEY,
        }
      });
    });

    it('should test ArtPieceManager TranslateResponseToRecords function', async () => {
      let artDataItems: [ArtDataItem] = [{
        title: "fakeTitle1",
        primaryimageurl: "fakeprimaryimageurl1",
        people: [ { displayname: "fake displayname1" }]
      }
    ]

      artDataItems.push( {
        title: "fakeTitle2",
        primaryimageurl: "fakeprimaryimageurl2",
        people: [ { displayname: "fake displayname2" }]
      });

      let expectedValue: ArtPiece[] = [
        {
          title: "fakeTitle1",
          imageURL: "fakeprimaryimageurl1?height=300",
          artistName: "fake displayname1"
        },
        {
          title: "fakeTitle2",
          imageURL: "fakeprimaryimageurl2?height=300",
          artistName: "fake displayname2"
        },
      ]

      expect(ArtPieceManager.TranslateResponseToRecords(artDataItems)).toEqual(expectedValue);
    });
});