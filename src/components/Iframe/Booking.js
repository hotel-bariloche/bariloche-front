import React from 'react';
import CalendarGif from './calendar.gif';

const Booking = () => {
    return(
    <div>
         <form action="https://booking.ihotelier.com/istay/istay.jsp" method="get" name="resform" id="resform">
                <input type="hidden" name="HotelID" value="#####" />
                <input type="hidden" name="LanguageID" value="#" />
                <input type="hidden" name="Rooms" value="1" /> 

                <p>Check-In Date:</p>
                <input name="DateIn" type="text" />
                <a href="javascript:openCalendar('DateIn')"><img src={CalendarGif} width="20" height="20" border="0" /></a>

                <p>Nights:</p>
                <select name="Length">
                <option value="1" selected="selected">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="10">11</option>
                <option value="10">12</option>
                <option value="10">13</option>
                <option value="10">14</option>
                </select>

                <p>Adults:</p>
                <select name="Adults">
                <option value="1" selected="selected">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                </select>

                <p>Children:</p>
                <select name="Children">
                <option value="0" selected="selected">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                </select>

                <input type="submit" value="Submit" />
            </form>
    </div>
    )
}

export default Booking