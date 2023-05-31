const baseUrl = "http://localhost:9000/api/bookings/"

// get all - method get
export const getBookings = function() {
    return (
        fetch(baseUrl)
        .then((result) => result.json())
    )
}

// get one -method get
export const getOneBooking = function(id) {
    return (
        fetch(baseUrl + id)
        .then((result) => result.json())
    )
}

// delete - method delete
export const deleteOneBooking = function(id) {
    return (
        fetch(baseUrl + id, {
            method:'DELETE'
        })
        
    )
}
//add - method post
export const addOneBooking = function(object) {
    return (
        fetch(baseUrl,{
            method: 'POST',
            body:JSON.stringify(object),
            headers: {"Content-Type":"application/json"}
        })
        .then(res => res.json())
    )
}