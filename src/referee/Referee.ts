import { PieceType, TeamType } from '../components/Chessboard/Chessboard';

export default class Referee {
    isValideMove(px: number, py: number, x: number, y: number, type: PieceType, team: TeamType) {
        console.log('Referee is checking the move');
        console.log(`previos location (${px},${py})`);
        console.log(`current location (${x},${y})`);
        console.log(`Piece type: ${type}`);
        console.log(`Piece team: ${team}`);

        if (type === PieceType.PAWN) {
            if (team === TeamType.OUR) {
                if (py === 1) {
                    if ((px === x && y - py === 1) || y - py === 2) {
                        console.log('Vallid move!');
                        return true;
                    }
                }
            }
        }
        return false;
    }
}
