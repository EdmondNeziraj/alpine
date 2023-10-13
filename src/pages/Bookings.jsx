import Heading from "../ui/Heading";
import Row from "../ui/Row";
import BookingTable from "../../src/features/bookings/BookingTable";
import BookingTableOperations from "../../src/features/bookings/BookingTableOperations";

function Bookings() {
    return (
        <>
            <Row type="horizontal">
                <Heading as="h1">All bookings</Heading>
                <BookingTableOperations />
            </Row>

            <BookingTable />
        </>
    );
}

export default Bookings;