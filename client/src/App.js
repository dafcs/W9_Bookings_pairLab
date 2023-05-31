import { useEffect, useState } from 'react'
import BookingForm from "./components/BookingForm";
import BookingList from "./components/BookingsList";
import { getBookings, deleteOneBooking, getOneBooking, addOneBooking } from './services/BookingsService';

function App() {

  const [allBookings,setAllBookings] = useState([])
  const [selectedBooking,setSelectedBooking] = useState([])

  //collect and add all bookings
 useEffect(()=>{
  getBookings().then(result =>   setAllBookings(result))
 },[allBookings,selectedBooking])

  //set new list from removed to allBookings

  const deleteBooking = (id) => {
    deleteOneBooking(id)
  }

  const addBooking = (booking) => {
    return addOneBooking(booking)
    // setAllBookings(newBookingList)
  }
  return (
    <>
    <BookingList allBookings={allBookings} deleteBooking={deleteBooking} />
    <BookingForm addBooking={addBooking} setSelectedBooking={setSelectedBooking}/>
    </>
  );
}

export default App;
