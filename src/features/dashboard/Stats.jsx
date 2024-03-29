import { formatCurrency } from "../../utils/helpers";
import Stat from "./Stat";
import { HiOutlineBanknotes, HiOutlineCalendarDays, HiOutlineChartBar } from "react-icons/hi2"

function Stats({ bookings, confirmedStays, numDays, cabins }) {
    const numBookings = bookings.length;

    const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0)

    const checkins = confirmedStays.length;

    const occupation = confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) / (numDays * cabins.length)

    return (
        <>
            <Stat
                title={"Bookings"}
                color={"blue"}
                icon={<HiOutlineBanknotes />}
                value={numBookings}
            />
            <Stat
                title={"Sales"}
                color={"green"}
                icon={<HiOutlineBanknotes />}
                value={formatCurrency(sales)}
            />
            <Stat
                title={"Check ins"}
                color={"indigo"}
                icon={<HiOutlineCalendarDays />}
                value={checkins}
            />
            <Stat
                title={"Occupancy rate"}
                color={"yellow"}
                icon={<HiOutlineChartBar />}
                value={Math.round(occupation * 100) + "%"}
            />
        </>
    )
}

export default Stats;