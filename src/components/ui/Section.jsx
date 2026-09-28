export function Section({secId, styles, children}) {
  return (
    <section id={secId} className={`px-2 lg:px-15 py-5 ${styles}`}>
      {children}
    </section>
  )
}
