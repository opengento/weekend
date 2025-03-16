import Hero from "@/components/Hero/Hero";

const AssociationHero = () => {
  return (
    <Hero imagePath="/images/media/bg.webp" size="full">
      <div className="max-w-5xl">
        <h1 className="mb-5 text-5xl font-bold">Week-End Opengento</h1>
        <p className="mb-5">
          Il s'agit de l'évènement incontournable pour les développeurs, sur
          les technologies qui gravitent autour de l'e-commerce.<br/>
          Avec un focus spécial sur la solution Magento !
        </p>
        <button className="btn btn-primary">Organiser le prochain Week-End !
        </button>
      </div>
    </Hero>
  );
}

export default AssociationHero;
