interface Time {
  date: Date | string;
  locales?: Intl.LocalesArgument;
  options?: Intl.DateTimeFormatOptions;
  className?: string | undefined;
}

const Time = ({
  date,
  locales = [],//ToDo prevent server side generation
  options = { hour: "2-digit", minute: "2-digit" },
  className
}: Time) => {
  if (typeof date === "string") {
    date = new Date(date);
  }

  return (
    <time dateTime={date.toISOString()} className={className}>
      {date.toLocaleTimeString(locales, options)}
    </time>
  );
};

export default Time;
