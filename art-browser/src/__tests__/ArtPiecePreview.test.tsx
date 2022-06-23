import React from "react";

import { render, screen, findByTestId } from "@testing-library/react";
import { ArtPiecePreview } from "../Components/ArtPiecePreview";



describe("<ArtPieceDisplay/>", () => {

  test("should display", async () => {

    //define fake data
    let fakeImageURL = "fakeImageURL";
    let fakeTitle = "fakeTitle";
    let fakeArtistName = "fakeArtistName";
  
    var container = render(<ArtPiecePreview imageURL={fakeImageURL} title={fakeTitle} artistName={fakeArtistName}/>);

    expect(screen.getByTestId("image")).toBeInTheDocument();
    expect(screen.getByTestId("image").getAttribute("src")).toEqual(fakeImageURL);

    expect(screen.getByTestId("title")).toBeInTheDocument();
    expect(screen.getByTestId("title").textContent).toEqual(fakeTitle);

    expect(screen.getByTestId("artist-name")).toBeInTheDocument();
    expect(screen.getByTestId("artist-name").textContent).toEqual(fakeArtistName);

    expect(screen.getByTestId("ArtPiecePreview")).toBeInTheDocument();
    expect(screen.getByTestId("ArtPiecePreview").className).toEqual("ArtPiecePreview");


  });

});

