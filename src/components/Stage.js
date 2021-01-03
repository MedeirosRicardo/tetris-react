import { StyledStage } from '../styles/StyledStage';
import Cell from './Cell';

const Stage = ({ stage }) => (
  <StyledStage width={stage[0].length} height={stage.length}>
    {stage.map(row => row.map((cell, index) => <Cell key={`cell-${index}`} type={cell[0]} />))}
  </StyledStage>
);

export default Stage;
