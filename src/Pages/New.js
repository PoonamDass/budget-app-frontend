import NewForm from "../Components/NewForm"
const New = ({addTransaction}) =>{

    return(
        <div>
            <h1>New Transaction</h1>
            <NewForm addTransaction ={addTransaction} />
        </div>

    )
}

export default New