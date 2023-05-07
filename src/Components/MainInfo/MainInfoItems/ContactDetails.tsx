import { Box, Grid, Link, Typography } from '@mui/material';

const firstColumn = {
  minWidth: '70px',
  paddingBottom: '2px',
} as const;

export const ContactDetails = () => {
  return (
    <Box display="flex" flexDirection="column">
      <Box display="flex">
        <Typography color="primary" variant="body2" sx={firstColumn}>
          Phone:
        </Typography>
        <Typography variant="body2">+48576315961</Typography>
      </Box>

      <Box display="flex">
        <Typography color="primary" variant="body2" sx={firstColumn}>
          E-mail:
        </Typography>
        <Typography variant="body2">zhannet1814@gmail.com</Typography>
      </Box>

      <Box display="flex">
        <Typography color="primary" variant="body2" sx={firstColumn}>
          GitHub:
        </Typography>
        <Link target="_blank" href="https://github.com/ZhannaL">
          <Typography variant="body2" color="black">
            https://github.com/ZhannaL
          </Typography>
        </Link>
      </Box>
      <Box display="flex">
        <Typography color="primary" variant="body2" sx={firstColumn}>
          Linkedin:
        </Typography>
        <Link target="_blank" href="https://www.linkedin.com/in/zhanna-sbitneva-9a05a0b0/">
          <Typography variant="body2" color="black">
            https://www.linkedin.com/in/zhanna-sbitneva-9a05a0b0/
          </Typography>
        </Link>
      </Box>
    </Box>
    // <Box>
    //   <Grid container spacing={1} columns={16}>
    //     <Grid container item spacing={2} paddingBottom={1} marginLeft={0}>
    //       <Grid xs={1}>
    //         <Typography color="primary" variant="body2" fontWeight={700}>
    //           Phone:
    //         </Typography>
    //       </Grid>
    //       <Grid>
    //         <Typography variant="body2">+48576315961</Typography>
    //       </Grid>
    //     </Grid>

    //     <Grid container item spacing={2} paddingBottom={1} marginLeft={0}>
    //       <Grid xs={1}>
    //         <Typography color="primary" variant="body2" fontWeight={700}>
    //           E-mail:
    //         </Typography>
    //       </Grid>
    //       <Grid>
    //         <Typography variant="body2">zhannet1814@gmail.com</Typography>
    //       </Grid>
    //     </Grid>

    //     <Grid container item spacing={2} paddingBottom={1} marginLeft={0}>
    //       <Grid xs={1}>
    //         <Typography color="primary" variant="body2" fontWeight={700}>
    //           GitHub:
    //         </Typography>
    //       </Grid>
    //       <Grid>
    //         <Link href="https://github.com/ZhannaL">
    //           <Typography variant="body2" color="black">
    //             https://github.com/ZhannaL
    //           </Typography>
    //         </Link>
    //       </Grid>
    //     </Grid>

    //     <Grid container item spacing={2} paddingBottom={1} marginLeft={0}>
    //       <Grid xs={1}>
    //         <Typography color="primary" variant="body2" fontWeight={700}>
    //           Linkedin:
    //         </Typography>
    //       </Grid>
    //       <Grid>
    //         <Link href="https://www.linkedin.com/in/zhanna-sbitneva-9a05a0b0/">
    //           <Typography variant="body2" color="black">
    //             https://www.linkedin.com/in/zhanna-sbitneva-9a05a0b0/
    //           </Typography>
    //         </Link>
    //       </Grid>
    //     </Grid>
    //   </Grid>
    // </Box>
  );
};
