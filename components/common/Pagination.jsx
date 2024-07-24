import React from "react";
import Link from "next/link";

function Pagination() {
  return (
    <>
      <nav>
        <ul className="pagination">
          <li>
            <Link href="/">
              <i className="bi bi-arrow-left-short"></i>
            </Link>
          </li>
          <li className="active">
            <Link href="/">
              01
            </Link>
          </li>
          <li>
            <Link href="/">
              02
            </Link>
          </li>
          <li>
            <Link href="/">
              03
            </Link>
          </li>
          <li>
            <Link href="/">
              <i className="bi bi-arrow-right-short"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Pagination;
