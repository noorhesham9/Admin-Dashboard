import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/BieChart";

const Pie = () => {
  return (
    <Box minHeight={"730px"} minWidth={"992px"} m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
