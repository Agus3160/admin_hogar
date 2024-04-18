import NavBarAdmin from "@/components/NavBarAdmin";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBarAdmin />
      {children}
    </>
  );
}
