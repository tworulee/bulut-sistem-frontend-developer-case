import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {

  const navigate =useNavigate()

  return (
    //Bir ürünün gösterilecek kısmı
    <Card onClick={()=>navigate(`/products/${product.id}`)}
      sx={{
        maxWidth: 245,
        m: 3,
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: 6,
        },
      }}
    >
      <CardMedia
        sx={{ height: 140 }}
        image={product?.thumbnail}
        title={product?.title}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            color: "text.black",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 1,
          }}
        >
          {product?.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            lineHeight: "1.5em",
            minHeight: "4.5em",
          }}
        >
          {product?.description}
        </Typography>
      </CardContent>
      <CardActions className="justify-between">
        <Typography gutterBottom variant="h6" color="blue" component="p">
          {product?.price}
        </Typography>
        <Rating name="half-rating" defaultValue={product?.rating} precision={0.5} readOnly />
      </CardActions>
    </Card>
  );
};

export default Product;
