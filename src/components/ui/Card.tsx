type Props = {
  children: React.ReactNode;
  title?: string;
};

function Card({ children, title = "" }: Props) {
  return (
    <div className="bg-green-300 shadow-md rounded-xl p-4 ">
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      {children}
    </div>
  );
}

export default Card;
