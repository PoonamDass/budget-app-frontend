import { useParams } from "react-router"
import TransactionDetails from "../Components/TransactionDetails"

const Show = ({deleteTransaction, transactions}) => {
    const {id}=useParams()
    const transaction = transactions[id]
    
    return (
        <div>
            <h1>Transaction Details</h1>
            <TransactionDetails
            transaction = {transaction}
            id = {id}
            deleteTransaction = {deleteTransaction}
            />
        </div>
    )
}

export default Show