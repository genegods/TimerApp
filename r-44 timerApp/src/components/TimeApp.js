import React, {useState, useEffect} from 'react'

const TimeApp = () => {

    // time
    const cTime = new Date().toLocaleTimeString()
    const [time, setTime] = useState(cTime)

    const updateTime = () =>{
        const newTime = new Date().toLocaleTimeString()
        setTime(newTime)
    }

    useEffect(() =>{
        const timeInterval = setInterval(updateTime, 1000)
        return () =>{
            clearInterval(timeInterval)
        }

    }, [time])



    // date
    const cDate = new Date().toLocaleDateString()
    const [date, setDate] = useState(cDate)

    const updateDate = () =>{
        const newDate = new Date().toLocaleDateString()
        setDate(newDate)
    }

    useEffect(() =>{
        const dateInterval = setInterval(updateDate, 1000)
        return () =>{
            clearInterval(dateInterval)
        }

    }, [date])




    // day
    
    const cDay = new Date().getDay()
    const [day, setDay] = useState(cDay)
    const weekDays = ['Sunday', 'Monday','tuesday','wednesday','thursday','friday','saturday']

    const updateDay = () =>{
        const newDay = new Date().getDay()
        setDay(newDay)
    }

    useEffect(() =>{
        const dayInterval = setInterval(updateTime, 1000)
        return () =>{
            clearInterval(dayInterval)
        }

    }, [day])



    return (
       <React.Fragment>
            <section>
                <div className="bg-black w-96 h-96 mt-20 mx-auto rounded-full text-white flex justify-center items-center">
                    <div>
                        <div className='text-xl uppercase text-center'>
                            <p>{weekDays[day]}</p>
                        </div>

                        <div className="text-6xl">
                            <p>{time}</p>
                        </div>

                        <div className='text-xl flex justify-end'>
                            <p>{date}</p>
                        </div>
                    </div>
                </div>
            </section>
       </React.Fragment>
    )
}

export default TimeApp
