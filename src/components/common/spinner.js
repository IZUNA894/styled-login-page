import styled ,{keyframes} from 'styled-components';

const rotation = keyframes`
            from{
                transform:rotate(-360deg);
            }
`;
const Spinner = styled.div`
            height:30px;
            width:30px;
            border:2px solid #f8049c;
            border-radius:50%;
            border-top:none;
            border-right:none;
            margin:16px auto;
            animation:${rotation} 1s linear infinite;
            `;
export {Spinner};