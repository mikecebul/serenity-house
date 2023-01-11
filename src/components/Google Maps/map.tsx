import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { nightStyles } from "./styles";

interface MapProps extends google.maps.MapOptions {
  style?: { [key: string]: string };
  onClick?: (e: google.maps.MapMouseEvent) => void;
  onIdle?: (map: google.maps.Map) => void;
  children?: React.ReactNode;
}

const Map: React.FC<MapProps> = ({ center, zoom, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  const { theme } = useTheme();
  
  useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, {
          center: center,
          zoom: 15,
          styles: theme === "dark" ? nightStyles : [],
        })
        )
      }
    }, [ref, map, center, zoom, theme]);
    
    useEffect(() => {
      if (theme === 'light') {
          map?.setOptions({styles: []})
        }
        if (theme === "dark") {
          map?.setOptions({styles: nightStyles})
        }
      }, [theme, map]);

  return (
    <>
      <div
        className="h-72 w-full min-w-fit md:h-72 md:w-3/5"
        ref={ref}
        id="map"
      />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // set the map prop on the child component
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          return React.cloneElement(child, { map });
        }
      })}
    </>
  );
};

export default Map;
