export default function Answer({ id }: { id: number }) {
  return (
    <label>
      Answer {id} :
      <input
        type="text"
        name={`answer-${id}`}
        id={`answer-${id}`}
        className=" ml-12 m-3 bg-gray-100 border border-gray-300 rounded p-1"
      />
      <input
        type="checkbox"
        name={`checked-${id}`}
        id={`checked-${id}`}
        className="checked:bg-green-500 default:aspect-square form-checkbox h-5 w-5"
      />
    </label>
  );
}
