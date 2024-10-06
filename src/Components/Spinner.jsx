import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";



export default function  Spinner() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  return (
    <div className="sweet-loading text-center">
      <ClipLoader
        color={color}
        loading={loading}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <p className="text-grayf8 capitalize text-lg">loading....</p>
    </div>
  );
}

