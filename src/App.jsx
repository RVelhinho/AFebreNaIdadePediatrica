import { Outlet } from 'react-router-dom';
import febreBackground from './assets/febreBackground.png';

export function App() {
  return (
    <div
      className="container-fluid position-relative"
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        padding: '0',
        position: 'fixed',
        backgroundImage: `url(${febreBackground})`,
        backgroundSize: 'stretch',
        backgroundPosition: 'center',
      }}
    >
      <div
        style={{
          position: 'relative',
          zIndex: '10',
          width: '100%',
          height: '100%',
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}
