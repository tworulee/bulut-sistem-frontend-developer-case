import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Comments from "./Comments";

const ProductDetailComp = ({ productDetail }) => {
  console.log(productDetail);

  return (
    //Detayda gösterilen ürün
    <Card
      sx={{
        display: "flex",
        justifyContent: "center",
        margin: "auto",
        maxWidth: 1000,
        height: "auto",
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: { xs: "100%", sm: 750 },
          paddingLeft: { xs: 0, sm: 2 },
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: 300,
            height: 300,
            borderRadius: "8px",
            backgroundColor: "#EEEEEE",
          }}
          image={productDetail.images}
          alt="Product Image"
        />
        <CardMedia
          component="img"
          sx={{
            width: 120,
            height: 120,
            border: "2px solid",
            borderColor: "rgba(0, 0, 0, 0.4)",
            borderRadius: "8px",
            backgroundColor: "#EEEEEE",
            marginTop: "28px",
            marginBottom: "20px",
          }}
          image={productDetail.images}
          alt="Product Image"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: { xs: "100%", sm: 650 },
          paddingLeft: { xs: 0, sm: 2 },
          paddingTop: { xs: 2, sm: 0 },
        }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography
            component="div"
            sx={{ fontSize: "1.7rem", fontWeight: 600 }}
          >
            {productDetail.title}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{
              fontSize: "1.2rem",
              color: "text.secondary",
              margin: "12px 0",
            }}
          >
            {productDetail.description}
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: "1.2rem",
                fontWeight: "600",
              }}
            >
              General Rate:
            </Typography>
            <Rating
              name="half-rating"
              defaultValue={productDetail.rating}
              precision={0.5}
              size="large"
              readOnly
            />
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: "500",
                color:
                  productDetail.stock < 10 ? "error.main" : "text.secondary", 
                marginLeft: "1rem",
              }}
            >
              {`Stokta ${productDetail.stock} tane vardır`}
            </Typography>
          </Box>

          <Typography
            sx={{
              fontSize: "60px",
              fontWeight: 500,
              margin: "12px 0",
            }}
          >
            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontSize: "2.25rem",
                  color: "red",
                  fontWeight: "600",
                }}
              >
                {productDetail?.discountPercentage > 0 ? (
                  <>
                    <Typography
                      component="span"
                      sx={{
                        textDecoration: "line-through",
                        color: "text.secondary",
                        fontWeight: "500",
                        fontSize: "1.4rem",
                        marginRight: "8px",
                      }}
                    >
                      $ {productDetail?.price}
                    </Typography>
                    <Typography
                      component="span"
                      sx={{
                        color: "#EEEEE",
                        fontWeight: "500",
                        fontSize: "1.9rem",
                        marginRight: "8px",
                      }}
                    >
                      ${" "}
                      {(
                        productDetail?.price -
                        (productDetail.price *
                          productDetail.discountPercentage *
                          1) /
                          100
                      ).toFixed(2)}{" "}
                    </Typography>
                  </>
                ) : (
                  <Typography component="span">
                    {productDetail?.price} $
                  </Typography>
                )}
              </Typography>
            </Box>
          </Typography>

          {productDetail?.reviews && productDetail.reviews.length > 0 ? (
            productDetail.reviews.map((review) => (
              <Comments review={review} key={review.id} />
            ))
          ) : (
            <p>No reviews available.</p>
          )}
        </CardContent>
      </Box>
    </Card>
  );
};

export default ProductDetailComp;
