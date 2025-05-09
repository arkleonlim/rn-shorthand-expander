import { CssBaseline, Container, Typography } from "@mui/material";
import TextExpander from "./components/TextExpander";

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" sx={{ pt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Regex-Based RN Shorcuts Expander
        </Typography>
        <TextExpander />
      </Container>
    </>
  );
}

export default App;
