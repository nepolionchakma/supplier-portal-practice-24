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
function Send() {
  return (
    <div className="border">
      <h2 className="font-bold ml-9 mt-8">Send</h2>
      <Table className='border-0 m-5 w-[95%]'>
        <TableCaption> </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">To</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead className="text-right">Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {inbox.map((i) => (
            <TableRow key={i.id}>
              <TableCell className="font-medium">{i.from}</TableCell>
              <TableCell>{i.subject}</TableCell>
              <TableCell className="text-right">{i.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table >
    </div >
  )
}
export default Send