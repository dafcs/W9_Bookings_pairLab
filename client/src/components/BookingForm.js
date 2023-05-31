import { useState } from "react"
const BookingForm = ({addBooking,setSelectedBooking}) => {

    const [guestName,setGuestName] = useState('')
    const [emailAddress,setEmailAddress] = useState('')


    const handleSubmit = (event) => {
        event.preventDefault()

        const booking = {
            name:guestName,
            email:emailAddress,
            checkedInStatus:false
        }
        console.log(booking)
        addBooking(booking)
            .then(bookingWithId => setSelectedBooking(bookingWithId))

        

        setGuestName('')
        setEmailAddress('')

    }

    const handleChangeName = (event) => {
        setGuestName(event.target.value)
    }
    const handleChangeEmail = (event) => {
        setEmailAddress(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="guest-name">Name: </label>
            <input value={guestName} type="text" onChange={handleChangeName} required autoFocus/>
            <label htmlFor="guest-email">Email: </label>
            <input value={emailAddress} type="text" onChange={handleChangeEmail} required/>
            <input type="submit"  value="something between"/>
        </form>
    )
}
export default BookingForm