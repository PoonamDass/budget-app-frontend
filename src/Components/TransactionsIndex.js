import TransactionShow from "../Components/TransactionShow"
const TransactionsIndex = ({transactions}) =>{
    return (
        <div class="container mb-5 mt-3">
            <table class= "table table-hover table-bordered">
                <thead>
                    <tr>
                        <th > Name</th>
                        <th > Amount</th>
                        <th> Date </th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction, id) =>{
                        return <TransactionShow key={id} transaction={transaction} id={id} />

                    })}
                </tbody>
            </table>
            

        </div>
    )

}

export default TransactionsIndex 