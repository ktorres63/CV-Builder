type Props = {
  children: React.ReactNode;
  title?: string;
  headerAction?: React.ReactNode;
};

function Card({ children, title = "", headerAction }: Props) {
  return (
    <div className="bg-green-300 shadow-md rounded-xl p-4 flex flex-col ">
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      {children}
      {headerAction}
    </div>
  );
}

export default Card;
