import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { FormControl, Input } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import axios from "axios";

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [searchedValue, setSearchedValue] = useState("");

  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setData(res.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (error) return "Error";

  return (
    <>
      <FormControl>
        <Input
          style={{ width: "50%", margin: 20 }}
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchedValue(e.target.value)}
        />
      </FormControl>

      {loading ? (
        <div
          style={{
            widht: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </div>
      ) : (
        <TableContainer>
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Name</Th>
                <Th>Username</Th>
                <Th>Email</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data &&
                data
                  .filter((item) => {
                    return searchedValue.toLowerCase() == ""
                      ? item
                      : item.name.toLowerCase().includes(searchedValue) ||
                          item.username.toLowerCase().includes(searchedValue) ||
                          item.email.toLowerCase().includes(searchedValue);
                  })
                  .map((d) => (
                    <Tr key={d.id}>
                      <Td>{d.id}</Td>
                      <Td>{d.name}</Td>
                      <Td>{d.username}</Td>
                      <Td>{d.email}</Td>
                    </Tr>
                  ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default Products;
