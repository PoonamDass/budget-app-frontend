import {useHistory, Link, useParams } from "react-router-dom"
import {useState, useEffect} from "react"
import axios from "axios"

import {apiURL} from "../util/apiURL"
const API = apiURL()

const EditForm = (props) => {
    let {id} = useParams()
    let history  = useHistory()
   
    const [transaction, setTransaction]= useState({
        from:"",
        date:"",
        name:"",
        amount:""
    })

    const handleChange = (e) => {
        setTransaction({...transaction, [e.target.id]: e.target.value})
    }

    const fetchTransaction = async() =>{
        try {
            const res = await axios.get(`${API}/transactions/${id}`)
            setTransaction(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(()=>{
        fetchTransaction()
    }, [])

    const handleSubmit = async(e) => {
        e.preventDefault()
        await props.updateTransaction(transaction, id)
        history.push(`/transactions/${id}`)
    }
    return(
        <div class="container">
            <form  onSubmit={handleSubmit} >
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
                </div>
                
                <br/>
               
                <button type="submit" class="btn btn-outline-success">Submit</button>

            </form>
            <br/>

            <Link to = {`/transactions/${id}`} >
                <button type="button" class="btn btn-outline-warning">Back</button>
            </Link>
        </div>
    )
}

export default EditForm