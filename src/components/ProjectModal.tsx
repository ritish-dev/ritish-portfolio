import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";

import type { Project } from "../types";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const backdropPress = useRef(false);
  const isBackdrop = (event: React.MouseEvent<HTMLDialogElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    return event.target === event.currentTarget && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom);
  };
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!project || !dialog) return;
    const trigger = document.activeElement;
    const overflow = document.body.style.overflow;
    const padding = document.body.style.paddingRight;
    const scrollY = window.scrollY;
    const mobile = window.matchMedia("(max-width: 800px)").matches;
    const bodyPosition = {
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width
    };
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbar && !CSS.supports("scrollbar-gutter", "stable")) {
      document.body.style.paddingRight = `${scrollbar}px`;
    }
    // Fixed positioning also locks the background on mobile Safari.
    if (mobile) {
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    }
    dialog.showModal();
    return () => {
      dialog.close();
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = padding;
      if (mobile) {
        Object.assign(document.body.style, bodyPosition);
        const scrollBehavior = document.documentElement.style.scrollBehavior;
        document.documentElement.style.scrollBehavior = "auto";
        window.scrollTo(0, scrollY);
        document.documentElement.style.scrollBehavior = scrollBehavior;
      }
      if (trigger instanceof HTMLElement) trigger.focus({ preventScroll: true });
    };
  }, [project]);
  return <dialog ref={dialogRef} className="modal" aria-labelledby="case-title"
    onKeyDown={event => {
      if (event.key !== "Tab") return;
      const controls = [...event.currentTarget.querySelectorAll<HTMLElement>('button, a[href], input, select, textarea, [tabindex]')]
        .filter(element => !("disabled" in element && element.disabled) && element.tabIndex >= 0 && element.getClientRects().length > 0);
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey ? document.activeElement === first : document.activeElement === last) {
        event.preventDefault();
        (event.shiftKey ? last : first)?.focus();
      }
    }}
    onCancel={event => { event.preventDefault(); onClose(); }}
    onPointerDown={event => { backdropPress.current = isBackdrop(event); }}
    onClick={event => {
      if (backdropPress.current && isBackdrop(event)) onClose();
      backdropPress.current = false;
    }}>
    {project && <article>
      <div className="modal-header"><button className="modal-close" onClick={onClose} aria-label="Close case study" autoFocus><X size={20}/></button>
      <p className="eyebrow">CASE STUDY · {project.number}</p></div>
      <h2 id="case-title">{project.title}</h2>
      <div className="tag-row">{project.tags.map(t => <span key={t}>{t}</span>)}</div>
      <div className="case-grid">{[["Challenge", project.challenge], ["Approach", project.approach], ["My role", project.role], ["Impact", project.impact]].map(([title, copy]) =>
        <section key={title}><h3>{title}</h3><p>{copy}</p></section>
      )}</div>
    </article>}
  </dialog>;
}

