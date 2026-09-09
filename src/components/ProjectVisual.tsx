import React from "react";

import type { Project } from "../types";

type ProjectVisualProps = { number: Project["number"] };

export default function ProjectVisual({ number }: ProjectVisualProps) {
  return <div className={`project-visual visual-${number}`} aria-hidden="true">
    <svg viewBox="0 0 300 100" fill="none">
      {number === "01" ? <>
        <path d="M65 25H105V50H147M65 75H105V50M193 50H235" />
        <rect x="15" y="10" width="50" height="30" rx="5"/><rect x="15" y="60" width="50" height="30" rx="5"/>
        <rect x="147" y="27" width="46" height="46" rx="9"/><rect x="235" y="30" width="50" height="40" rx="5"/>
        <path d="m160 50 7 7 13-14" className="visual-accent"/>
      </> : number === "02" ? <>
        <path d="M50 50H250"/><circle cx="45" cy="50" r="19"/><circle cx="150" cy="50" r="19"/><circle cx="255" cy="50" r="19"/>
        <path d="m37 50 5 5 10-11m90 6 5 5 10-11m90 6 5 5 10-11" className="visual-accent"/>
      </> : <>
        <path d="M150 50 45 22M150 50 45 78M150 50 255 22M150 50 255 78"/>
        <circle cx="150" cy="50" r="24"/><circle cx="45" cy="22" r="12"/><circle cx="45" cy="78" r="12"/><circle cx="255" cy="22" r="12"/><circle cx="255" cy="78" r="12"/>
        <circle cx="150" cy="50" r="9" className="visual-accent"/>
      </>}
    </svg>
  </div>;
}

