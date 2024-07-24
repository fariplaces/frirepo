import React from "react";
import Link from "next/link";

function PopularTag() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="sidebar-widget">
      <h4>Popular tag</h4>
      <ul className="tag-list">
        <li>
          <Link href="/" onClick={scrollTop}>
            Website
          </Link>
        </li>
        <li>
          <Link href="/" onClick={scrollTop}>
            Web Design
          </Link>
        </li>
        <li>
          <Link href="/" onClick={scrollTop}>
            Development
          </Link>
        </li>
        <li>
          <Link href="/" onClick={scrollTop}>
            Graphic Design
          </Link>
        </li>
        <li>
          <Link href="/" onClick={scrollTop}>
            Graphic
          </Link>
        </li>
        <li>
          <Link href="/" onClick={scrollTop}>
            UI/UX Design
          </Link>
        </li>
        <li>
          <Link href="/" onClick={scrollTop}>
            Activities
          </Link>
        </li>
        <li>
          <Link href="/" onClick={scrollTop}>
            Software Design
          </Link>
        </li>
        <li>
          <Link href="/" onClick={scrollTop}>
            3D Design
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default PopularTag;
