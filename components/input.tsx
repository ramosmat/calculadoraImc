export default function Inputs({
  label,
  place,
}: {
  label: string;
  place: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label>{label}</label>
      <input
        type="number"
        placeholder={place}
        className="border border-[#E85B81] rounded-md h-10 px-5 outline-none text-black"
      />
    </div>
  );
}
