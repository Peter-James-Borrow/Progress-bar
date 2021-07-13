import PropTypes from 'prop-types'
import Styled from 'styled-components'

const Container = Styled.div `
    progress {
        margin-right: 8px;
    }

    progress[value] {
        width: ${props => props.width}
        -webkit-appearance: none;
        appearance: none;
    }

    progress[value]::-webkit-progress-bar {
        height: 10px;
        barder-radius: 20px;
        background-color: #eee;
    }
    progress[value]::-webkit-progress-value {
        height: 10px;
        barder-radius: 20px;
        background-color: ${props => props.color};
    }
`


const ProgressBar = ({value, max, color, width}) => {
    return (
        <Container color={color} width={width}>
            <progress value={value} max={max} />
            <span>{(value/max) *100} %</span>
        </Container>
    )
}

ProgressBar.propTypes = {
    value: PropTypes.number.isRequired,
    max: PropTypes.number,
    color: PropTypes.string,
    width: PropTypes.string,
}

ProgressBar.defaultProps = {
    max: 100,
    width: '80%',
    color: 'lightblue',
}

export default ProgressBar

