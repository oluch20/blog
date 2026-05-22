export function Card({
  title,
  date,
  category,
  content,
}: {
  title: string;
  date: string;
  category: string;
  content: string;
}) {
  return (
    <div className="h-2/5 flex flex-col bg-slate-700 rounded-3xl">
      <div className="h-2/7 items-center justify-center flex flex-col bg-slate-600 rounded-t-3xl">
        <div className="h-1/3 w-2/3 flex flex-row items-center justify-between text-slate-300">
          <div>{category}</div>
          <div>{date}</div>
        </div>
        <div className="h-2/3 text-3xl flex text-center items-center justify-center">
          {title}
        </div>
      </div>
      <div className="h-3/5 w-full flex flex-col justify-center items-center text-center">
        {content}
        voluptatem repellendus praesentium. Voluptatum!D
      </div>
    </div>
  );
}
