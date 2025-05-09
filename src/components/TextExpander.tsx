import { useEffect, useState } from "react";
import {
  Autocomplete,
  Box,
  CircularProgress,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { expandAbbreviations } from "../utils/expander";

const TextExpander = () => {
  const [input, setInput] = useState("");
  const [expanded, setExpanded] = useState("");
  const [abbreviations, setAbbreviations] = useState<{
    [key: string]: string;
  } | null>(null);
  const [examples, setExamples] = useState<string[]>([]);

  useEffect(() => {
    fetch("/abbreviations.json")
      .then((res) => res.json())
      .then((data) => setAbbreviations(data))
      .catch(() => setAbbreviations({}));

    fetch("/examples.json")
      .then((res) => res.json())
      .then(setExamples)
      .catch(() => setExamples([]));
  }, []);

  useEffect(() => {
    if (abbreviations) {
      setExpanded(expandAbbreviations(input, abbreviations));
    }
  }, [input, abbreviations]);

  if (!abbreviations) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 600, margin: "2rem auto", px: 2 }}>
      <Autocomplete
        freeSolo
        options={examples}
        value={input}
        onInputChange={(_, newValue) => setInput(newValue)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Enter or select nursing note"
            variant="outlined"
            fullWidth
          />
        )}
      />
      <Typography variant="h6" mt={3} mb={1}>
        Expanded Text:
      </Typography>
      <Paper variant="outlined" sx={{ p: 2, minHeight: 80 }}>
        <Typography>{expanded || "—"}</Typography>
      </Paper>
    </Box>
  );
};

export default TextExpander;
