const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-5xl">
          <h1 className="mb-5 text-5xl font-bold">Week-End Opengento</h1>
          <p className="mb-5">
            Il s'agit de l'évènement incontournable pour les développeurs, sur
            les technologies qui gravitent autour de l'e-commerce.<br/>
            Avec un focus spécial sur la solution Magento !
          </p>
          <button className="btn btn-primary">Organiser le prochain Week-End !</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
