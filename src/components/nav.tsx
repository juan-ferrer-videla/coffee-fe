"use client";

import Link from "next/link";
import React, { ComponentProps, FC } from "react";

export const getMainLinks = () => [
  { path: "/", title: "Inicio" },
  { path: "/store", title: "Store" },
  { path: "/courses", title: "Courses" },
];

export const Nav: FC<ComponentProps<"nav">> = (props) => {
  const links = getMainLinks();
  return (
    <nav {...props}>
      <ul className="flex items-center gap-6">
        {links.map(({ path, title }) => (
          <li key={path}>
            <Link href={path}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
