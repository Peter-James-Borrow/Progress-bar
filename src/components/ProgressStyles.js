import Styled from 'styled-components'

const Container = Styled.div `
    progress {
        margin: 8px;

    }

    progress[value] {
        width: ${props => props.width};
        -webkit-appearance: none;
        appearance: none;
    }

    progress[value]::-webkit-progress-bar {
        height: 8px;
        border-radius: 20px;
        background-color: #eee;
    }
    progress[value]::-webkit-progress-value {
        border-radius: 20px;
        background-color: ${props => props.color};
    }

    span {
        color: red;
    }
`
export default Container;