const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>

        <div className="hidden lg:block">
          {/* For TSX uncomment the commented types below */}
          <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div className="flex flex-col">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value": 15} as React.CSSProperties}>15</span>
    </span>
              days
            </div>
            <div className="flex flex-col">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value": 10} as React.CSSProperties}>10</span>
    </span>
              hours
            </div>
            <div className="flex flex-col">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value": 24} as React.CSSProperties}>24</span>
    </span>
              min
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Hero;
