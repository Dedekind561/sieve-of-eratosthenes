import "../App.css";

type CellProps = {
  value: number;
  isMarked: boolean;
};

export default function Cell({ value }: CellProps) {
  console.log(`Busy rendering Cell component with value: ${value}`);

  return <button className="cell">{value}</button>;
}
