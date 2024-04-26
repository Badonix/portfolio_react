import React from "react";
export const ProjectCard = ({
  description,
  frontUrl,
  backUrl,
  liveUrl,
  title,
  imageSource,
}) => {
  return (
    <div className="text-white text-center border border-white rounded-xl">
      <img src={imageSource} className="rounded-t-xl" />
      <div className="p-3">
        <h3>{title}</h3>
        <p className="text-sm">{description}</p>
        <div className="flex items-center justify-between mt-3">
          <a
            className="border border-white rounded-md text-lg px-2 py-1"
            target="_blank"
            href={liveUrl}
          >
            Live
          </a>
          <div className="flex flex-col gap-2">
            <a
              className="border border-white rounded-md text-sm px-2 py-1"
              href={frontUrl}
              target="_blank"
            >
              Front Source
            </a>
            <a
              className="border border-white rounded-md text-sm px-2 py-1"
              target="_blank"
              href={backUrl}
            >
              Back Source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
