// @ts-nocheck

export const preventZoom = () => {
  document.addEventListener('gesturestart', (e) => {
    e.preventDefault();
    document.body.style.zoom = 'scale(1)';
  });

  document.addEventListener('gesturechange', (e) => {
    e.preventDefault();
    document.body.style.zoom = 'scale(1)';
  });

  document.addEventListener('gestureend', (e) => {
    e.preventDefault();
    document.body.style.zoom = 'scale(1)'; // Reset transform on gesture end
  });
};
