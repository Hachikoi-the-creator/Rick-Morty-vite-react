import { useParams } from "react-router-dom";

export default function CardDetails() {
  const par = useParams();
  console.log(par);

  return <div>CardDetails</div>;
}
