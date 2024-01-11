export default function Linha({
  range,
  classe,
  bg,
}: {
  range: string;
  classe: string;
  bg: string;
}) {
  return (
    <tr className={`bg-${bg}`}>
      <td className="text-[#505050] font-semibold pl-6">{range}</td>
      <td className="text-[#505050] font-semibold pt-1">{classe}</td>
    </tr>
  );
}
