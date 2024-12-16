import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";




const clothe=[
  
  'src/images/hoodie_pink_front_hood_shopify_2048x.webp',
  "src/images/R.jpeg",
  "src/images/hoodie_white_front_shopify_2048x.webp",];
export default function ProductDetails() {
 
  return (
    <Box sx={{ display:'flex' ,flexDirection: { xs: "column", sm: "row" },alignItems:'center',gap:2.5}}>
      <Box sx={{display:'flex'}}>
        <img width={300} src="src\images\hoodie_pink_front_hood_shopify_2048x.webp" />
      </Box>
      <Box  sx={{ py: 2, textAlign: { xs: "center", sm: "left" } }}>
        <Typography  variant="h5">
          Womens fashion
        </Typography>
        <Typography  my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
          22$
        </Typography>
        <Typography variant="body1">
          product details .............
          ......................
          .....................
        </Typography>

        <Stack sx={{ justifyContent: { xs: "center", sm: "left" } }}
        direction={'row'} gap={1}my={2}>
          {clothe.map((item)=>{
            return(
              <img key={item} style={{borderRadius:'3'}} height={100} width={90} src={item} alt=""/>
            )
          })}
        </Stack>
        <Button
          sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
          variant="contained"
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy now
        </Button>
      </Box>
    </Box>
  );
}
