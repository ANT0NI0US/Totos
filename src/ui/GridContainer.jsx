export default function GridContainer({ children }) {
  return (
    <div className="flex flex-col gap-4 xs:grid xs:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
      {children}
    </div>
  );
}
