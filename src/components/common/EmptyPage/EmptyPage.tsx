export function EmptyPage({
  title,
  text,
  size,
  color,
  margin,
  img,
  imgName,
  children,
}) {
  return (
    <section className='empty-page'>
      <h1>{title}</h1>
      {children}
    </section>
  );
}
