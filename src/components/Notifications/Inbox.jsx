import { useAuthContext } from "@/Supabase/AuthContext"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { format } from 'date-fns';

const inbox = [
  {
    id: 1,
    from: "John",
    subject: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, aliquid officiis nobis similique rem dicta voluptate numquam quam dolorem omnis nulla ad",
    date: "28/04/2024"
  },
  {
    id: 2,
    from: "Manjo",
    subject: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, aliquid officiis nobis similique rem dicta voluptate numquam quam dolorem omnis nulla ad",
    date: "28/04/2024"
  },
]
function Inbox() {
  const { messageData, allUserData } = useAuthContext()
  console.log(messageData)


  const timestamp = "2024-06-06T11:39:14.887387+00:00";
  const date = new Date(timestamp);

  // Format the date
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  // Adjust hours for AM/PM format
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // Handle midnight (0 hours)

  const formattedDate = `${year}-${month}-${day}`;
  const formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;

  console.log("Formatted Date:", formattedDate);
  console.log("Formatted Time:", formattedTime);


  return (
    <div className="border">
      {/* <h2 className="font-bold ml-9 mt-8">Inbox</h2> */}
      <Table className='border-0 m-5 w-[95%]'>
        <TableCaption> </TableCaption>
        <TableHeader>

          <TableRow>
            <TableHead className="w-[200px]">From</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Message</TableHead>
            <TableHead className="text-right w-[150px]">Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {messageData.map((m) => (
            <TableRow key={m.id}>

              <TableCell className="font-medium" >{allUserData.filter(u => u.id === m.sender_id)[0].user_name}</TableCell>
              <TableCell>{m.subject}</TableCell>
              <TableCell>{m.message}</TableCell>
              <TableCell className="text-right">
                <span>{format(new Date(m.created_at), 'dd-mm-yyy')}</span>
                <br />
                <span>{format(new Date(m.created_at), 'hh:mm:ss a')}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
export default Inbox