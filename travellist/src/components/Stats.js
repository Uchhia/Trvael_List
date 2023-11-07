function Stats({ items }) {
  if (!items.length)
    return <p className="stats">Start adding some item to your list 🚀</p>;

  const numOfitem = items.length;
  const noOfPacked = items.filter((item) => item.packed === true).length;
  const percPack = Math.round((noOfPacked / numOfitem) * 100);
  return (
    <footer className="stats">
      {percPack === 100 ? (
        <em>You got everything ready to go ✈</em>
      ) : (
        <em>
          💼 You have {numOfitem} items on your list ,and you already packed
          {"      "}
          {noOfPacked} {percPack}%
        </em>
      )}
    </footer>
  );
}
export default Stats;
