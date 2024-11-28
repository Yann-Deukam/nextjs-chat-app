import Sidebar from "../components/sidebars/Sidebar";

export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <Sidebar>{children}</Sidebar>
    </div>
  );
}
