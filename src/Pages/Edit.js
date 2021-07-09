import EditTransaction from "../Components/EditTransaction"

const Edit = ({updateTransaction}) => {
    
    return (
        <div class="edit-page">
            <h1>Edit Transaction</h1>
            <EditTransaction  updateTransaction={updateTransaction} />
        </div>
    )
}

export default Edit