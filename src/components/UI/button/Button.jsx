import PropTypes from 'prop-types'
import "./button.css"

function Button({ text, categoryId, onSelect, selection }) {
    const onBtnClick = () => {
        console.log(categoryId)
        onSelect(text, { id: categoryId, title: text })
    }

    return (
        <button className={`btn ft-white ${selection.includes(text) ? 'btn__active' : ''}`} onClick={onBtnClick}>
            {text}
        </button>
    )
}
Button.propTypes = {
    text: PropTypes.string,
    onSelect: PropTypes.func,
    categoryId: PropTypes.number,
    selection: PropTypes.array
}

export default Button