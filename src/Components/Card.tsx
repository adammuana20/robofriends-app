import { Robot } from "../Containers/App";

type CardProps = {
    robot: Robot
}

export default function Card({ robot }: CardProps){
    const { id, name, email } = robot
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
