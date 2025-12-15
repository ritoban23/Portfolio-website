"use client";

import { Showcase } from "gh-showcase";
import "gh-showcase/style.css";

export default function ShowcaseWrapper({ username }: { username: string }) {
  return <Showcase username={username} />;
}
