import {Link} from "react-router-dom"

const Transaction = ({transaction, id}) => {
    return (

       
                    <tr>
                        <td> <Link to={`/transactions/${id}`}>{transaction.name}</Link></td>
                        <td>${transaction.amount}</td>
                    </tr>
             
           

    

    )
}

export default Transaction