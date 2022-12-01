import React, { useEffect, useRef, useState } from "react";

const Map: React.FC<unknown> = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  return <div ref={ref} />;
};

export default Map;
