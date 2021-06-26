// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { apiURL } from "./util/apiURL";
import axios from "axios"
import { useState, useEffect } from "react";



import NavBar from "./Components/NavBar"
import Index from "./Pages/Index"
import Show from "./Pages/Show"
import Edit from "./Pages/Edit"
import New from "./Pages/New"
import Error from "./Pages/Error"
import Home from "./Pages/Home"
const API = apiURL();

function App() {
  const [transactions, setTransactions] = useState([])
  
  const fetchTransactions = async() => {
    try {
      const response = await axios.get(`${API}/transactions`)
      setTransactions(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=> {
    fetchTransactions()
  }, [])

  const deleteTransaction = async(id) => {
    try {
      await axios.delete(`${API}/transactions/${id}`)
      const newState = [...transactions]
      newState.splice(id, 1)
      setTransactions(newState)
    } catch (error) {
      console.log(error)
    }
  }

  const updateTransaction = async (updatedTransaction, id) => {
    try {
      await axios.put(`${API}/transactions/${id}`, updatedTransaction)
      const newTransactions = [...transactions]
      newTransactions[id] = updatedTransaction
      setTransactions(newTransactions)
    } catch (error) {
      console.log(error)
    }
  }

  const addTransaction = async(newTransaction) => {
    try {
      const res = await axios.post(`${API}/transactions`, newTransaction)
      setTransactions(prevTransactions=> [...prevTransactions, res.data])
    } catch (err) {
      console.log(err)
      
    }
  }

 
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path ="/transactions">
              <Index transactions= {transactions} />
            </Route>
            <Route path="/transactions/new">
              <New transactions={transactions} addTransaction={addTransaction} />
            </Route>
            <Route path="/transactions/:id/edit">
              <Edit transactions={transactions} updateTransaction={updateTransaction} />
            </Route>
            <Route exact path="/transactions/:id">
              <Show transactions={transactions} deleteTransaction={deleteTransaction} />
            </Route>
            <Route>
              <Error path="*" />
            </Route>
          </Switch>

        </main>
      </Router>
    </div>
  );
}

export default App;
