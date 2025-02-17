import Logo from "@/components/Logo/Logo";

interface MainLogo {
  size?: "small" | "medium" | "large";
  showText?: boolean;
}

const MainLogo = ({ size = "medium", showText = true }: MainLogo) => {
  return (
    <Logo
      href="/"
      logoSrc="/images/logo/opengento.svg"
      logoText="Opengento"
      showText={showText}
      size={size}
    />
  );
};

export default MainLogo;
