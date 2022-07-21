import { Box, createTheme, CssBaseline, Switch, ThemeProvider } from "@mui/material";
import { ReactNode, useEffect, useState } from "react";
import { usePaletteMode } from "../store/palette-mode";

export const Theme = ({ children }: { children: ReactNode }) => {
  const [paletteMode, setPaletteMode] = usePaletteMode();
  const [isDarkMode, setIsDarkMode] = useState(paletteMode === 'dark');

  const theme = createTheme({
    palette: {
      mode: paletteMode,
    },
  });

  useEffect(() => {
    setIsDarkMode(paletteMode === 'dark');
  });

  const handleChangePaletteMode =(event: React.ChangeEvent<HTMLInputElement>) => {
    const paletteMode = event.target.checked ? 'dark' : 'light';
    setPaletteMode(paletteMode);
    setIsDarkMode(event.target.checked);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box p={4}>
        Palette Mode :
        <Switch checked={isDarkMode} onChange={handleChangePaletteMode} />
        {paletteMode}
      </Box>
      {children}
    </ThemeProvider>
  )
}