const BookingCard = ({booking,deleteBooking}) => {

    const handleClick = ((event)=>{
        const id = event.target.value
        deleteBooking(id)
    })

    return (
        <>
        <h1>{booking.name}</h1>
        <button value={booking._id} onClick={handleClick}>
            Remove
        </button>
        </>
    )
}
export default BookingCard