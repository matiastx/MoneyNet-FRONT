import { useDispatch, useSelector } from "react-redux";
import { CategoriesCard } from "./Crypto.Styled";
import { selectCategory } from "../../../Redux/categories/categoriesSlice";

export const Categoria = ({title, img, category}) => {

    const {selectedCategory} = useSelector((state) => state.categories)
    
    const dispatch = useDispatch()

    return (
        <CategoriesCard
            selected={category === selectedCategory}
            WhileTap={{ scale: 0.95 }}
            onClick={() => dispatch(selectCategory(category))}
        >
            <img src={img} alt={title} />
            <h3>{title}</h3>
        </CategoriesCard>

        )
    };

export default Categoria;