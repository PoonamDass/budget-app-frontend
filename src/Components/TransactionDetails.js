 import {  Link, useHistory, withRouter} from "react-router-dom"

const TransactionDetails = ({deleteTransaction, transaction, id}) => {

    let history = useHistory()

    const handleDelete = () => {
        deleteTransaction(id)
        history.push('/transactions')
      }
    return (
        <div>
            <h2>{transaction.name}</h2>
            <p>{transaction.from}</p>
            <p>{transaction.amount}</p>
            <Link to = {`/transactions`}>
                <button type="button" class="btn btn-outline-success" >Back</button>
            </Link>

            <Link to= {`/transactions/${id}/edit`}>
                <button type="button" class="btn btn-outline-warning" >Edit</button>
            </Link>

            <button type="button" class="btn btn-outline-danger" onClick = {handleDelete}>Delete</button>
        
        </div>
    )
}
export default withRouter(TransactionDetails)