import React, { useEffect, useRef, useState } from "react";

function Map() {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, {
          center: {
            lat: 45.315694564004815,
            lng: -85.25995679164798,
          },
          zoom: 15,
        })
      );
    }
  }, [ref, map]);

  return <div className="h-72 w-full min-w-fit md:max-w-lg md:h-48" ref={ref} id="map" />;
}

export default Map;
