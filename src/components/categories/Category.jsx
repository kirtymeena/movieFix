import { useState } from 'react'
import "./category.css"
import Button from '../UI/button/Button';
import PropTypes from 'prop-types'
import ErrorBoundry from '../../utils/ErrorBoundry';

function Category({ category, error, setSelectedCategory }) {
    const [selection, setSelection] = useState([])
    const [selectionCatObj, setSelectionCatObj] = useState([])

    const onCategorySelection = (selectedCategory, categoryObj) => {
        if (selection.includes(selectedCategory)) {
            const unselectCategory = selection.filter(category => category !== selectedCategory);
            const unselectCategoryObj = selectionCatObj.filter(category => category.title !== selectedCategory);

            setSelectionCatObj(unselectCategoryObj)
            setSelection(unselectCategory)
            setSelectedCategory(unselectCategoryObj)
        }

        else {
            setSelectionCatObj([...selectionCatObj, categoryObj])
            setSelection([...selection, selectedCategory])
            setSelectedCategory([...selection, categoryObj])

        }
    }
    return (
        <ErrorBoundry error={error}>
            <div className='category__container container'>
                <div className='category__wrapper'>
                    {
                        category.genres && category.genres.map(category =>
                            <Button text={category.name} categoryId={category.id} key={category.id} onSelect={onCategorySelection} selection={selection} />
                        )
                    }

                </div>
            </div>
        </ErrorBoundry>
    )
}

Category.propTypes = {
    error: PropTypes.string,
    category: PropTypes.object,
    setSelectedCategory: PropTypes.func
}

export default Category