import axios from "axios";
import iconNot from '../../assets/img/notification-icon.svg';
import { BASE_URL } from "../../utils/request";
import './styles.css';

type Props = {
    saleId: number;

}

function handleClick(id: number) {

    axios.get(`${BASE_URL}/sales/${id}/notification`)
        .then(Response => {
            console.log("sucesso");
        })

}


function NotificationButton( {saleId} : Props) {
    return (
        //vai criar o handleClick .
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
            <img src={iconNot} alt="Notificar" />
        </div>
    )
}

export default NotificationButton;
