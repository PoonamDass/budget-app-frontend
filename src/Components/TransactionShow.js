import {Link} from "react-router-dom"

const TransactionShow = ({transaction, id}) => {
    return (

       
                    <tr>
                        <td> <Link to={`/transactions/${id}`}>{transaction.name}</Link></td>
                        <td>${transaction.amount}</td>
                        <td>{transaction.date}</td>
                    </tr>
             
           

    

    )
}

export default TransactionShow