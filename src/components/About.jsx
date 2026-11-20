function About({
  image = "https://via.placeholder.com/215",
  about,
}) {
  return (
    <aside className="mb-10 flex items-start gap-5 border border-white p-6">
      {image ? (
        <img
          className="h-16 w-16 shrink-0 rounded-full object-cover"
          src={image}
          alt="blog logo"
        />
      ) : null}
      <p className="max-w-2xl leading-7 text-white">{about}</p>
    </aside>
  );
}

export default About;