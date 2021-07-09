import TransactionsIndex from "../Components/TransactionsIndex"
const Index = ({transactions}) =>{

    
    let sum=0
    transactions.forEach((transaction)=>{
        sum+= Number(transaction.amount)
    })
    return(
        <div>
          <h1>Transactions</h1>
          <br />
          <h2>

         Total: ${Number(sum)}
          </h2>
          <TransactionsIndex transactions={transactions} />
          
        </div>
    )
}

export default Index