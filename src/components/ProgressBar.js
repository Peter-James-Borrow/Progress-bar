// Show progress
// Show a measurements
import PropTypes from 'prop-types';
import Styled from 'styled-components'

const Container = Styled.div `
    progress {
        margin-right: 8px;
    }

    progress[value]{
        width: ${props => props.width}
        -webkit-appearance: none;
        appearance: none;
    }

    progress[value]::-webkit-progress-bar {
        height: 10px;
        border-radius: 10px;
        background-color: #eee;

    }
    progress[value]::-webkit-progress-value {
        height: 10px;
        border-radius: 10px;
        background-color: ${(props =>props.color)}

    }

    
`


const ProgressBar = ({value, max, color, width}) => {
    return (
        <Container color={color} width={width}>
            <progress value={value} max={max}/>
            <span>{(value/max) * 100} % </span>
        </Container>

        
    )}

ProgressBar.propTypes = {
    value: PropTypes.number,
    max: PropTypes.number,
    color: PropTypes.string,
    width: PropTypes.string,
}

ProgressBar.defaultProps = {
    max: 100,
    color: 'lightblue',
    width: '800px',
}

export default ProgressBar
