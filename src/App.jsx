import { Outlet } from "react-router-dom";

export function App() {
  return (
    <div
      className="container-fluid position-relative"
      style={{
        width: "100vw",
        padding: "2rem",
      }}
    >
      <div
        style={{
          position: "fixed",
          background:
            "linear-gradient(146deg, rgba(255,255,255,1) 0%, rgba(255,197,216,1) 65%, rgba(254,160,217,1) 100%)",
          width: "100vw",
          height: "100vh",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      ></div>
      <div
        style={{
          position: "relative",
          zIndex: "10",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}
