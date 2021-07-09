import NewTransaction from "../Components/NewTransaction"
const New = ({addTransaction}) =>{

    return(
        <div>
            <h1>New Transaction</h1>
            <NewTransaction addTransaction ={addTransaction} />
        </div>

    )
}

export default New