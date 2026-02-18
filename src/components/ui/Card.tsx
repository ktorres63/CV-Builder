type Props = {
  children: React.ReactNode;
};

function Card({ children }: Props) {
  return (
    <div className="bg-green-300 shadow-md rounded p-4">
      <h2 className="text-lg font-bold mb-4">General Information</h2>
      {children}
    </div>
  );
}

export default Card;
