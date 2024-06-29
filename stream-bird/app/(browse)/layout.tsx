import { Suspense } from "react";
import Container from "./_components/container";
import Navbar from "./_components/navbar";
import Sidebar from "./_components/sidebar";

export default function Browselayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <Sidebar />
        <Container>{children}</Container>
      </div>
    </>
  );
}
