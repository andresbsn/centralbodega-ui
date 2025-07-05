import DetailPyme from "./DetailPyme";
import DetailIess from "./DetailIess";
import DetailRsi from "./DetailRSI";

export default function DetalleSwitcher({ data }) {
  switch (data._tipo) {
    case "pyme":
      return <DetailPyme data={data} />;
    case "iess":
      return <DetailIess data={data} />;
    case "rsi":
      return <DetailRsi data={data} />;
    default:
      return <p>Tipo desconocido</p>;
  }
}