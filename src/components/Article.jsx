function Article({ title, date = "January 1, 1970", preview, minutes }) {
  return (
    <article className="mb-6 border border-white p-6">
      <h3 className="mb-2 text-2xl font-bold text-white">{title}</h3>
      <small className="text-sm font-medium text-white">{date}</small>
      <p className="mt-4 leading-7 text-white">{preview}</p>
      {minutes ? (
        <p className="mt-4 text-sm font-semibold text-white">
          {minutes} min read
        </p>
      ) : null}
    </article>
  );
}

export default Article;