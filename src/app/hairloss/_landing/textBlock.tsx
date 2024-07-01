type TextBlockType = {
  caption: string;
  title: string;
  text: string;
};

export default function TextBlock({ caption, title, text }: TextBlockType) {
  return (
    <div className="max-w-sm px-1">
      <span className="text-xs">{caption}</span>
      <h3 className="text-2xl mt-3">{title}</h3>
      <p className="pt-5">{text}</p>
    </div>
  );
}
