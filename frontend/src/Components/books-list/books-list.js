import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Button,
  Card,
  CardActions,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Typography,
} from "@mui/material";
import classes from "./styles.module.css";
/*import { BackendApi } from "../../client/backend-api";*/

export default function BooksList() {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const fetchBooks = async () => {
    /*const { books } = await BackendApi.book.getAllBooks();
    console.log(books);
    setBooks(books);*/
  };

  useEffect(() => {
    fetchBooks().catch(console.error);
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <div className={`${classes.pageHeader} ${classes.mb2}`}>
        <Typography variant="h5">Book List</Typography>
      </div>
      {books.length > 0 ? (
        <>
          <div className={classes.TableContainer}>
            <TableContainer component={Paper}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">ISBN</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                    <TableCell align="right">Availability</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {books
                    .slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                    .map((book) => (
                      <TableRow key={book.isbn}>
                        <TableCell component="th" scope="row">
                          {book.name}
                        </TableCell>
                        <TableCell align="right">{book.isbn}</TableCell>
                        <TableCell>{book.category}</TableCell>
                        <TableCell align="right">{book.quantity}</TableCell>
                        <TableCell align="right">
                          {book.availableQuantity}
                        </TableCell>
                        <TableCell align="right">{book.price}</TableCell>
                        <TableCell>
                          <div className={classes.actionsContainer}>
                            <Button
                              variant="contained"
                              component={RouterLink}
                              size="small"
                              to={`/books/${book.isbn}`}
                            >
                              View
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              component="div"
              count={books.length}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </div>
        </>
      ) : (
        <Typography variant="h4">No books found</Typography>
      )}
    </div>
  );
};
