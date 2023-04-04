import DetailView from "./DetailView";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import Card from "./Card";
import "./gridView.css";

function GridView({ movieData }) {
  const [movieId, setMovieId] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const handleClick = (id, data) => {
    setMovieId(id);
    setSelectedMovie(data);
  };

  useEffect(() => {
    window.addEventListener("resize", resetDetailView);
    return () => {
      window.removeEventListener("resize", resetDetailView);
    };
  }, []);

  useEffect(() => {
    resetDetailView();
  }, [movieData]);

  function resetDetailView() {
    setSelectedMovie(null);
    setMovieId(null);
  }

  return (
    <ul className="grid-container">
      {movieData.map((e, i) => (
        <li
          key={e.name}
          data-id={i}
          onClick={() => handleClick(i, e)}
          className="grid-item"
        >
          <Card data={e} />
        </li>
      ))}
      {DetailViewTemplate && movieId !== null ? (
        <DetailViewTemplate id={movieId} selectedMovie={selectedMovie} />
      ) : null}
    </ul>
  );
}

const DetailViewTemplate = (props) => {
  const [container, setContainer] = useState();

  useEffect(() => {
    let createContainer;
    const element = document.querySelector(`.grid-container`);
    const targetItem = document.querySelector(
      `.grid-item[data-id="${props.id}"]`
    );
    const containerWidth = element.clientWidth - 100;
    const targetItemWidth = targetItem.clientWidth;
    const numberOfElementsRow = Math.ceil(containerWidth / targetItemWidth);

    const getFirstElementofRow = Math.floor(
      Number(props.id) / numberOfElementsRow
    );
    const targetElement = document.querySelector(
      `.grid-item[data-id="${getFirstElementofRow * numberOfElementsRow}"]`
    );
    if (!createContainer) {
      createContainer = document.createElement("div");
      createContainer.classList.add("details-container");
    }

    targetElement.parentNode.insertBefore(createContainer, targetElement);
    setContainer(createContainer);

    return () => {
      createContainer.remove();
    };
  }, [props.id]);

  return props.id !== null && container
    ? createPortal(
        <DetailView
          movieData={props.selectedMovie}
          isOpen={props.id !== null && container}
        />,
        container
      )
    : null;
};

export default GridView;
