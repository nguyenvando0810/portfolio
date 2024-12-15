import { Header } from "@/components/layout/header";
import { SideBar } from "@/components/layout/sidebar";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <div className="layout-wrapper">
      <Header />
      <div className="flex px-14 py-20">
        <SideBar />
        <div className="main-layout">{children}</div>
      </div>
    </div>
  );
};
