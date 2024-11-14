import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";

const ProductDetailComp = ({ productDetail }) => {
  console.log(productDetail);
  return (
    <Card
  sx={{
    display: "flex",
    justifyContent: "center", // Card'ı yatayda ortalar
    margin: "7rem auto", // Card'ı ekranda ortalamak için
    maxWidth: 1000,
    height:400 // Kart genişliğini sınırlamak için
  }}
>
  <CardMedia
    component="img"
    sx={{ width: 350 }} // Görselin genişliğini daraltmak için
    image={productDetail.images}
    alt="Product Image"
  />
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      maxWidth: 650, // Yazıların olduğu kısmı daraltmak için
      paddingLeft: 2,
    }}
  >
    <CardContent sx={{ flex: "1 0 auto", marginTop:"70px" }}>
      <Typography component="div" sx={{ fontSize:"1.6rem",  }}>
        {productDetail.title}
      </Typography>
      <Typography
        variant="subtitle1"
        component="div"
        sx={{ fontSize:"1.3rem", color: "text.secondary" ,margin:"12px 0" }}
      >
        {productDetail.description}
      </Typography>
      <Typography>
        <Rating
          name="half-rating"
          defaultValue={productDetail.rating}
          precision={0.5}
          readOnly
        />
      </Typography>
      <Typography sx={{ fontSize:"25px", color: "blue" ,margin:"12px 0" }}>$ {productDetail.price}</Typography>
     
    </CardContent>
  </Box>
</Card>

  );
};

export default ProductDetailComp;
