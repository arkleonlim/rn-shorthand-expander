import {
  CssBaseline,
  Container,
  Typography,
  GlobalStyles,
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
          Regex-Based RN Shortcuts Expander
        </Typography>
        <TextExpander />
      </Container>
    </>
  );
}

export default App;
