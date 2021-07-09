import Transactions from "../Components/Transactions"
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
          <Transactions transactions={transactions} />
          
        </div>
    )
}

export default Index