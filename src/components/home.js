import { useGetOrgs } from '../data/mock-hooks';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from "react-router-dom";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// const columns = [
//   { field: 'id', headerName: 'ID', width: 200 },
//   { field: 'name', headerName: 'Name', width: 130 },
//   {
//     field: 'legacy_id',
//     headerName: 'Legacy ID',
//     type: 'number',
//     width: 120,
//     sortable: false,
//   },
//   {
//     field: 'created_at',
//     headerName: 'Creation date',
//     type: 'date',
//     width: 150,
//   },
// ];


const Home = props => {
  const { data: orgs } = useGetOrgs();

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>ID</TableCell>
            <TableCell>Legacy ID</TableCell>
            <TableCell align="right">Creation date</TableCell>
            <TableCell> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orgs.map((org) => (
            <TableRow key={org.name}>
              <TableCell component="th" scope="org">
                {org.name}
              </TableCell>
              <TableCell>{org.id}</TableCell>
              <TableCell>{org.legacy_id}</TableCell>
              <TableCell align="right">{org.created_at}</TableCell>
              <TableCell><Link to={`/organization/${org.id}`}>View</Link></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
  // return (
  //   <div>
  //     <h2>Organizations</h2>
  //     <div style={{ height: 400, width: '100%' }}>
  //       <DataGrid
  //         rows={orgs}
  //         columns={columns.map((column) => ({
  //           ...column,
  //           disableClickEventBubbling: true,
  //         }))}
  //         pageSize={5}
  //
  //       />
  //     </div>
  //   </div>
  // )
  // return (
  //   <div>
  //     <h2>Organizations</h2>
  //     <List>
  //       {orgs.map(org => (
  //         <ListItem key={org.id}>
  //           <ListItemText primary={org.name} />
  //         </ListItem>
  //       ))}
  //     </List>
  //   </div>
  // )
};

export default Home;
