import { useId } from "react";
import { Enrol as EnrolType } from "@/interfaces/association";
import Typography from "@/components/Typography/Typography";
import ButtonLink from "@/components/ButtonLink/ButtonLink";

interface Enrol {
  enrol: EnrolType
}

const Enrol = ({ enrol }: Enrol) => {
  const id = useId();

  return (
    <section className="flex flex-col gap-4">
      <Typography variant="h3" color="dark">
        {enrol.title}
      </Typography>
      <Typography color="dark" className="whitespace-pre-wrap">
        {enrol.content}
      </Typography>
      {enrol.list.length > 0 && (
        <ul className="pl-4 md:pl-8 list-disc">
          {enrol.list.map((item, index) => (
            <li key={`${id}-${index}`}>{item}</li>
          ))}
        </ul>
      )}
      <div className="flex flex-col md:flex-row-reverse md:justify-end gap-4 items-center">
        <Typography color="dark" weight="semibold">
          {enrol.pricing}
        </Typography>
        <ButtonLink cta={enrol.cta} />
      </div>
    </section>
  );
};

export default Enrol;
