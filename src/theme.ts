import { createTheme } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'gray',
  colors: {
    // Define your color palette here
  },
  components: {
    AppShell: {
      styles: (theme:any) => ({
        main: {
          backgroundColor: 'var(--mantine-color-body)',
        },
      }),
    },
  },
});