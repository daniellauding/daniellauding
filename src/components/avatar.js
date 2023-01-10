import React, {useState, useCallback} from "react";
import classNames from "classnames";
import { about } from "../constant";

const Avatar = () => {

  const [previewCase, setPreviewCase] = useState(null);

  const heroImg = about.map(intro => intro.hero);

  const [active, setActive] = useState(null);

  const selectedChanged = useCallback((value) => {
      setActive(value || null);
      setPreviewCase(null);
  }, [setActive]);

  return (
    <div
      className={classNames(
        "cover bg-cover",
        active ? "col-span-2" : "md:w-1/2"
      )}
    >

      <div>ollesaasdadasd</div>
      <img
        src={active?.bg || previewCase?.bg || heroImg}
        className={classNames(
          "object-cover",
          active ? "w-full h-auto" : "w-full h-full"
        )}
        alt=""
        onClick={() => selectedChanged(previewCase || null)}
      />
    </div>
  );
};

export default Avatar;
