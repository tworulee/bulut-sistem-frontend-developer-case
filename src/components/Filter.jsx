import { useDispatch, useSelector } from "react-redux";

const Filter = ({setFilterText}) => {
    // const dispatch = useDispatch();
    // const { categories } = useSelector((state) => state.categories);
  
    // useEffect(() => {
    //   dispatch(getCategories());
    // }, [dispatch]);
  return (
    <div>
      <input placeholder='ara'   onChange={(e) => setFilterText(e.target.value)}/>
    </div>
  )
}

export default Filter
