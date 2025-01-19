import React from "react";

export default async function RSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto w-full nax-w-7xl">
      <header></header>
      <div className="px-4 py-2">{children}</div>
    </main>
  );
}
