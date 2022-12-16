import {useEffect, useState} from "react";

function App() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [sortMethod, setSortMethod] = useState("desc")
  const [category, setCategory] = useState(null)
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/?sort=asc')
        .then(res=>res.json())
        .then(json=> {
            setProducts([...json.sort((a,b) => {
                return sortMethod === "asc" ? a.price === b.price ? 0 : a.price > b.price ? -1 : 1 : a.price === b.price ? 0 : a.price > b.price ? 1 : -1
            } )])
        })
      fetch('https://fakestoreapi.com/products/categories')
          .then(res=>res.json())
          .then(json=> {
              setCategories([...json])
          })
  }, [])
    const changeSortMethodHandler = (method) => {
        setSortMethod(method)
    }
    const changeCategoryHandler = (category) => {
        setCategory(category)
    }
    useEffect(() => {
        let categoryAddition = category != null ? `/category/${category}` : ""
        fetch(`https://fakestoreapi.com/products${categoryAddition}`)
            .then(res=>res.json())
            .then(json=> {
                setProducts([...json.sort((a,b) => {
                    return sortMethod === "asc" ? a.price === b.price ? 0 : a.price > b.price ? -1 : 1 : a.price === b.price ? 0 : a.price > b.price ? 1 : -1
                } )])
            })
        // setProducts([...products])
    }, [category, sortMethod])
  return (
     <>
         <div style={{margin: "auto", textAlign: "center"}}>
             Sort by:
             <select onChange={(e) => changeSortMethodHandler(e.currentTarget.value)}>
                <option value={"desc"}>Зростання</option>
                <option value={"asc"}>Спадання</option>
             </select>
         </div>
         <div style={{margin: "auto", textAlign: "center"}}>
             Category:
             {categories.map((item, index) =>
                 <button key={index} onClick={() => changeCategoryHandler(item)}>{item}</button>
             )}
             <button onClick={() => changeCategoryHandler(null)}>Clear filters</button>
         </div>

         <div className="catalog-items">
             {products.map(item =>
                 <article key={item.key} className="catalog-item new">
                     {/*<div className="actions">*/}
                     {/*    <a href="#" className="buy">Купить</a>*/}
                     {/*    <a href="#" className="bookmark">В закладки</a>*/}
                     {/*</div>*/}
                     <div className="catalog-item-image">
                         <img width="218" height="168"
                              src={item.image}
                              alt={item.title}/>
                     </div>
                     <h1 className="title">{item.title}</h1>
                     <div className="price">{Math.floor(item.price * 40)} грн.</div>
                 </article>
             )}
         </div>
     </>
  );
}

export default App;
