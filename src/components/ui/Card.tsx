type Props = {
  children: React.ReactNode;
};

function Card({ children }: Props) {
  return <div className="bg-green-300 shadow-md rounded p-4">{children}</div>;
}

export default Card;
