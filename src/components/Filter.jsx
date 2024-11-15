

const Filter = ({setFilterText,setFromAmount,setToAmount}) => {
 
  return (
    <div className="flex flex-col sm:flex-row gap-2 items-center sm:items-stretch justify-center p-4">
    <input
      placeholder="Ara"
      onChange={(e) => setFilterText(e.target.value)}
      className="border rounded-md p-2 w-1/2 sm:w-auto sm:flex-1 focus:outline-none focus:ring focus:border-blue-300"
    />
    <input
      type="number"
      placeholder="From"
      onChange={(e) => setFromAmount(e.target.value)}
      className="border rounded-md p-2 w-1/2 sm:w-auto sm:flex-1 focus:outline-none focus:ring focus:border-blue-300"
    />
    <input
      type="number"
      placeholder="To"
      onChange={(e) => setToAmount(e.target.value)}
      className="border rounded-md p-2 w-1/2 sm:w-auto sm:flex-1 focus:outline-none focus:ring focus:border-blue-300"
    />
  </div>
  
  )
}

export default Filter
