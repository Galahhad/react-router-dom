import React from "react";

const Map = () => {
  return (
    <div className="map_wrap">
      <h1>Where we are</h1>
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A4cb159077aaaae5d7470e7f21227a765133e97f26f232b92a03df101412fff1d&amp;source=constructor"
        title="Yandex Map"
        width="715"
        height="524"
        frameborder="0"
        className="yandex_map"
      ></iframe>
    </div>
  );
};

export default Map;
