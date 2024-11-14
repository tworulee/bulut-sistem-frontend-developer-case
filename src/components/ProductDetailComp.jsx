import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";

const ProductDetailComp = ({ productDetail }) => {
  console.log(productDetail);
  return (
    <Card
  sx={{
    display: "flex",
    justifyContent: "center",
    margin: { xs: "0 auto", sm: "7rem auto" }, // Küçük ekranda yukarıdaki boşluk kaldırılır
    maxWidth: 1000,
    height: { xs: "auto", sm: 400 }, // Mobilde yükseklik otomatik ayarlanır
    flexDirection: { xs: "column", sm: "row" }, // Küçük ekranlarda üst üste yerleşir
  }}
>
  <CardMedia
    component="img"
    sx={{ width: { xs: "100%", sm: 350 } }} // Mobilde genişlik %100 olur
    image={productDetail.images}
    alt="Product Image"
  />
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      maxWidth: { xs: "100%", sm: 650 }, // Mobilde tam genişlik
      paddingLeft: { xs: 0, sm: 2 }, // Küçük ekranda padding kaldırılır
      paddingTop: { xs: 2, sm: 0 }, // Küçük ekranda üstten boşluk eklenir
    }}
  >
    <CardContent
      sx={{ flex: "1 0 auto", marginTop: { xs: "0", sm: "70px" } }}
    >
      <Typography component="div" sx={{ fontSize: "1.6rem" }}>
        {productDetail.title}
      </Typography>
      <Typography
        variant="subtitle1"
        component="div"
        sx={{
          fontSize: "1.3rem",
          color: "text.secondary",
          margin: "12px 0",
        }}
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
      <Typography
        sx={{ fontSize: "25px", color: "blue", margin: "12px 0" }}
      >
        $ {productDetail.price}
      </Typography>
    </CardContent>
  </Box>
</Card>

  );
};

export default ProductDetailComp;
