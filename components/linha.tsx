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
      <td className="text-[#505050] font-semibold px-2 md:pl-6">{range}</td>
      <td className="text-[#505050] font-semibold pl-2 md:pl-0 pt-1">
        {classe}
      </td>
    </tr>
  );
}
