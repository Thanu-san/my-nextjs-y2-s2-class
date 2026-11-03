import { DesktopComponent } from "./DesktopComponent";
import { MobileComponent } from "./MobileComponent";

export const NavbarComponent = () => {
  return (
    <section className="border-b bg-background">
      <div className="container mx-auto px-4">
        <DesktopComponent />
        <MobileComponent />
      </div>
    </section>
  );
};
