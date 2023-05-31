import BookingCard from "./BookingCard"

const BookingList = ({allBookings,deleteBooking}) => {
    // console.log(allBookings)




    const parsedList = allBookings.map((booking)=>{
        return <BookingCard  key={booking._id} booking={booking} deleteBooking={deleteBooking}/>
    })

    return (
        <>
            {parsedList}
        </>
    )
}
export default BookingList