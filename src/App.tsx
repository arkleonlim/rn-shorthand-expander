import {
  CssBaseline,
  Container,
  Typography,
  GlobalStyles,
  Box,
} from "@mui/material";
import TextExpander from "./components/TextExpander";

function App() {
  return (
    <>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            margin: 0,
            fontFamily: '"Roboto", sans-serif',
          },
        }}
      />
      <Container maxWidth="md" sx={{ pt: 4 }}>
        <Typography variant="h4" component="h1" textAlign="center" gutterBottom>
          RN Shorthand Expander
        </Typography>
        <TextExpander />
        <Box textAlign="center" mt={4}>
          <Typography variant="caption">
            Developed by Arb Lim, RN, MS
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default App;
