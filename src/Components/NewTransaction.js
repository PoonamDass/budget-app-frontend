import {useState} from "react"
import {withRouter, useHistory} from "react-router-dom"

const NewTransaction = ({addTransaction}) =>{
    const history = useHistory()
    const [transaction, setTransation] = useState({
        from:"",
        date:"",
        name:"",
        amount:""
    })

    const handleChange = (e) => {
        setTransation({...transaction, [e.target.id]: e.target.value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault() 
        addTransaction(transaction)
        history.push(`/transactions`)
    }

    return(
        <div class="container">
          <form onSubmit={handleSubmit}>
          <div class="form-group ">
                <label  htmlFor="date" class="col-form-label-lg">Date</label>
                <input class="form-control"
                  
                    id="date"
                    value={transaction.date}
                    type="date"
                    onChange={handleChange}
                    required
                    />
                </div>

          <div class="form-group ">
                <label  htmlFor="from" class="col-form-label-lg">Transaction Name </label>
                <input class="form-control"
                  
                    id="name"
                    value={transaction.name}
                    type="text"
                    onChange={handleChange}
                    required
                    />
                </div>
                
                <div class="form-group">

                <label htmlFor="from" class="col-form-label-lg">From </label>
                 <input class="form-control"
                    id="from"
                    value={transaction.from}
                    type="text"
                    onChange={handleChange}
                    required
                    />
                </div>
                
                <div class="form-group">
                <label htmlFor="amount" class="col-form-label-lg">Amount </label>
                 <input class="form-control"
                    id="amount"
                    value={transaction.amount}
                    type="number"
                    onChange={handleChange}
                    required
                    />
                    <br />
                <input type="submit" class="btn btn-outline-success" />
                </div>

            </form>   
        </div>
    )

}
export default withRouter(NewTransaction)