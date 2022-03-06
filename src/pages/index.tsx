import {
  Box,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { line_users } from "@prisma/client";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [users, setUsers] = useState<line_users[]>([]);
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);
  return (
    <div>
      <Head>
        <title>sb2tt | 管理画面</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        component="main"
        sx={{
          width: "100vw",
          minHeight: "100vh",
          padding: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {users.length ? (
          <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>User ID</TableCell>
                <TableCell>Installation ID</TableCell>
                <TableCell>Default Schedule Title</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow>
                  <TableCell>{user.user_id}</TableCell>
                  <TableCell>{user.installation_id}</TableCell>
                  <TableCell>{user.default_schedule_title}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table></TableContainer>
        ) : (
          <CircularProgress />
        )}
      </Box>
    </div>
  );
};

export default Home;
