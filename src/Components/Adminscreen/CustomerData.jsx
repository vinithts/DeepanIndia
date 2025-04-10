import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { instance } from "../../utils/api";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export default function CustomerData() {
  const [customerData, setCustomerData] = useState([]);
 
  const getCustomerData = async () => {
    try {
      const response = await instance.get(`/landing//admin/CustomerDetails`);
      if (response.status === 200) {
        setCustomerData(response.data);
      }
    } catch (error) {
      console.error(
        "Error fetching about data:",
        error.response?.data || error.message
      );
    }
  };

  useEffect(() => {
    getCustomerData();
  }, []);

  return (
    <AdminContentPart>
      <TableContainer component={Paper} marginTop={"20px"}>
          <Table>
            <TableHead sx={{ backgroundColor: "#121472", color: "#fff" }}>
              <TableRow>
                <TableCell sx={{color: "#fff" }}>Name</TableCell>
                <TableCell sx={{color: "#fff" }}>Email</TableCell>
                <TableCell sx={{color: "#fff" }}>Phone</TableCell>
                <TableCell sx={{color: "#fff" }}>Interested In</TableCell>
                <TableCell sx={{color: "#fff" }}>Message</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customerData.map((slider) => (
                <TableRow key={slider.id}>
                  <TableCell>{slider.name}</TableCell>
                  <TableCell>{slider.email}</TableCell>
                  <TableCell>{slider.phone}</TableCell>
                  <TableCell>{slider.interested_in}</TableCell>
                  <TableCell>{slider.message}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </AdminContentPart>
  );
}

const AdminContentPart = styled.div`
  background-color: #f3f3f3;
  padding: 30px 30px;
  margin-top: 30px;
  height: 600px;
`;
