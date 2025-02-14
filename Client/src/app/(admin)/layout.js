export const metadata = {
  title: "Admin Panel",
};

export default function AdminLayout({ children }) {
  return (
    <div>
      <h1>Admin Panel</h1>
      {children}
    </div>
  );
}
