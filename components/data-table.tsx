import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export function DataTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Transaction ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Service</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">#TRX-5632</TableCell>
            <TableCell>Olivia Martin</TableCell>
            <TableCell>Premium Consultation</TableCell>
            <TableCell>2023-05-15</TableCell>
            <TableCell>$299.00</TableCell>
            <TableCell>
              <Badge className="bg-green-500 hover:bg-green-600">Completed</Badge>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">#TRX-5631</TableCell>
            <TableCell>Jackson Lee</TableCell>
            <TableCell>Basic Support</TableCell>
            <TableCell>2023-05-14</TableCell>
            <TableCell>$99.00</TableCell>
            <TableCell>
              <Badge className="bg-green-500 hover:bg-green-600">Completed</Badge>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">#TRX-5630</TableCell>
            <TableCell>Isabella Nguyen</TableCell>
            <TableCell>Advanced Analytics</TableCell>
            <TableCell>2023-05-13</TableCell>
            <TableCell>$199.00</TableCell>
            <TableCell>
              <Badge className="bg-yellow-500 hover:bg-yellow-600">Pending</Badge>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">#TRX-5629</TableCell>
            <TableCell>William Kim</TableCell>
            <TableCell>Custom Development</TableCell>
            <TableCell>2023-05-12</TableCell>
            <TableCell>$499.00</TableCell>
            <TableCell>
              <Badge className="bg-green-500 hover:bg-green-600">Completed</Badge>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">#TRX-5628</TableCell>
            <TableCell>Sofia Davis</TableCell>
            <TableCell>Maintenance Plan</TableCell>
            <TableCell>2023-05-11</TableCell>
            <TableCell>$149.00</TableCell>
            <TableCell>
              <Badge className="bg-red-500 hover:bg-red-600">Failed</Badge>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

