import Transaction from "../Components/Transaction"
const Transactions = ({transactions}) =>{
    return (
        <div class="container mb-5 mt-3">
            <table class= "table table-hover table-bordered">
                <thead>
                    <tr>
                        <th > Name</th>
                        <th > Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction, id) =>{
                        return <Transaction key={id} transaction={transaction} id={id} />

                    })}
                </tbody>
            </table>
            

        </div>
    )

}

export default Transactions 