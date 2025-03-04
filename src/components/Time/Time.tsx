interface Time {
  date: Date;
  locales?: Intl.LocalesArgument;
  options?: Intl.DateTimeFormatOptions;
  className?: string | undefined;
}

const Time = ({
  date,
  locales = [],
  options = { hour: "2-digit", minute: "2-digit" },
  className
}: Time) => {
  return (
    <time dateTime={date.toISOString()} className={className}>
      {date.toLocaleTimeString(locales, options)}
    </time>
  );
};

export default Time;
