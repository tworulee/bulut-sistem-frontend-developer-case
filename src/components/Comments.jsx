import React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Divider,
  Box,
  Rating,
} from "@mui/material";

const ReviewItem = ({ review }) => {
  return (
    <List sx={{ width: "100%", maxWidth: "auto", bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
          <ListItemText
            primary={review.reviewerEmail}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  sx={{ color: "text.primary", display: "inline" }}
                >
                  {`${review.reviewerName}-`}
                </Typography>
                {review.comment}
              </React.Fragment>
            }
          />
          <Rating
            name="half-rating"
            defaultValue={review.rating}
            precision={0.5}
            size="large"
            readOnly
            sx={{ ml: 2 }} 
          />
        </Box>
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
};

export default ReviewItem;
