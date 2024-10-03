export default function GridContainer({
  children,
  Styles = "xs:grid xs:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]",
}) {
  return <div className={`flex flex-col gap-4 ${Styles}`}>{children}</div>;
}
