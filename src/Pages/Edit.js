import EditForm from "../Components/EditForm"

const Edit = ({updateTransaction}) => {
    
    return (
        <div class="edit-page">
            <h1>Edit Transaction</h1>
            <EditForm  updateTransaction={updateTransaction} />
        </div>
    )
}

export default Edit 