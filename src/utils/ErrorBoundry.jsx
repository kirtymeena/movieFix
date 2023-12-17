import PropTypes from 'prop-types'

function ErrorBoundry({ error, children }) {
    return error ?
        <div className="container error">Something went wrong!</div>
        :
        children
}

ErrorBoundry.propTypes = {
    error: PropTypes.string,
    children: PropTypes.element
}

export default ErrorBoundry