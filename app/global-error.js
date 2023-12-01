"use client";

const GlobalError = ({ error, reset }) => {
  return (
    <html>
      <body>
        <div>
          <h2>Something went wrong!</h2>
          <button
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
};
