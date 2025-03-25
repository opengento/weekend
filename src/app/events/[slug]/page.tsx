import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllEventIds, getEvent} from "@/lib/event";
import EventPage from "@/layouts/Event/EventPage";

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page(props: Params) {
  const params = await props.params;
  const event = getEvent(params.slug);

  return event ? <EventPage event={event} /> : notFound();
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const event = getEvent(params.slug);

  if (!event) {
    return notFound();
  }

  const title = `${event.title} | Opengento`;

  return {
    title,
    openGraph: {
      title,
      images: [event.bannerSrc],
    },
  };
}

export async function generateStaticParams() {
  return getAllEventIds().map((eventId) => ({
    slug: eventId,
  }));
}
