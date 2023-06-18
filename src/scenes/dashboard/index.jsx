import React from "react";
import Header from "../../components/Header";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PointOfSaleOutlinedIcon from "@mui/icons-material/PointOfSaleOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import TrafficOutlinedIcon from "@mui/icons-material/TrafficOutlined";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import GeographyChart from "../../components/GeographyChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}>
        <Header title={"DASHBOARD"} subtitle={"Welcome to your dashboard"} />
        <Box>
          <Button
            sx={{
              mr: "20px",
              backgroundColor: colors.blueAccent[700],
              color: colors.gray[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}>
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>{" "}
      </Box>
      <Box
        maxHeight={"77vh"}
        paddingRight={"20px"}
        paddingBottom="5px"
        display={"grid"}
        gridTemplateColumns={"repeat(12, 1fr)"}
        gridTemplateRows={"repeat(5, 1fr)"}
        gap={"20px"}>
        <Box
          // sx={{
          //   borderTopLeftRadius :  '4px'
          // }}
          borderRadius={"4px"}
          gridColumn={"span 3"}
          gridRow={"span 1"}
          backgroundColor={colors.primary[400]}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}>
          <StatBox
            title={"12,361"}
            subtitle={"Emails sent"}
            progress={"0.75"}
            increase={"+14%"}
            icon={
              <EmailOutlinedIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>
        <Box
          borderRadius={"4px"}
          gridColumn={"span 3"}
          gridRow={"span 1"}
          backgroundColor={colors.primary[400]}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}>
          <StatBox
            title={"431,225"}
            subtitle={"sales abtained"}
            progress={"0.5"}
            increase={"+21%"}
            icon={
              <PointOfSaleOutlinedIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>
        <Box
          borderRadius={"4px"}
          gridColumn={"span 3"}
          gridRow={"span 1"}
          backgroundColor={colors.primary[400]}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}>
          <StatBox
            title={"32,441"}
            subtitle={"New Clients"}
            progress={"0.30"}
            increase={"+5%"}
            icon={
              <PersonAddOutlinedIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>
        <Box
          borderRadius={"4px"}
          gridColumn={"span 3"}
          gridRow={"span 1"}
          backgroundColor={colors.primary[400]}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}>
          <StatBox
            title={"1,325,159"}
            subtitle={"Traffic Inbound"}
            progress={"0.80"}
            increase={"+43%"}
            icon={
              <TrafficOutlinedIcon
                sx={{
                  color: colors.greenAccent[600],
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>
        <Box
          borderRadius={"4px"}
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}>
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center">
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.gray[100]}>
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}>
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        <Box
          borderRadius={"4px"}
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.gray[100]}
            p="15px">
            <Typography color={colors.gray[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px">
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600">
                  {transaction.txId}
                </Typography>
                <Typography color={colors.gray[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.gray[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px">
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        <Box
          borderRadius={"4px"}
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="20px">
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="15px">
            <ProgressCircle size="115" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}>
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box
          borderRadius={"4px"}
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}>
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}>
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          borderRadius={"4px"}
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="20px">
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}>
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
