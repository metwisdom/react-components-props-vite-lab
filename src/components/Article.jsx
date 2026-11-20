function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const readingTime =
    minutes < 30
      ? `${"☕️".repeat(Math.ceil(minutes / 5))} ${minutes} min read`
      : `${"🍱".repeat(Math.ceil(minutes / 10))} ${minutes} min read`;

  return (
    <article className="mb-6 border border-white p-6">
      <h3 className="mb-2 text-2xl font-bold text-white">{title}</h3>
      <small className="text-sm font-medium text-white">{date}</small>
      <p className="mt-4 leading-7 text-white">{preview}</p>
      {minutes > 0 ? (
        <p className="mt-4 text-sm font-semibold text-white">
          {readingTime}
        </p>
      ) : null}
    </article>
  );
}

export default Article;