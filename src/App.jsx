import { Outlet } from 'react-router-dom';

import febreBackground from './assets/febreBackground.png';

export function App() {
  return (
    <div>
      <div
        className="container-fluid "
        style={{
          top: '0',
          left: '0',
          width: '100vw',
          height: '53rem',
          overflow: 'hidden',
          padding: '0',
          zIndex: '0',
          position: 'fixed',
          backgroundImage: `url(${febreBackground})`,
          backgroundSize: 'stretch',
          backgroundPosition: 'center',
        }}
      ></div>
      <div
        className="container-fluid "
        style={{
          top: '53rem',
          left: '0',
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',
          padding: '0',
          zIndex: '0',
          position: 'fixed',
          backgroundColor: '#fff',
        }}
      ></div>
      <div
        className="container-fluid "
        style={{
          top: '0',
          left: '0',
          width: '100vw',
          height: '100dvh',
          overflow: 'hidden',
          padding: '0',
          zIndex: '1',
          position: 'fixed',
          display: 'flex',
          justifyContent: 'center',
          overflowY: 'auto',
          overflowX: 'hidden',
        }}
      >
        <div
          style={{
            position: 'relative',
            zIndex: '10',
            width: '100%',
            maxWidth: '1200px',
            height: '100%',
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}
