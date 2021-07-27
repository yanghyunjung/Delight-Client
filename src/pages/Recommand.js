import React from "react";
import { Grid, Button } from "../elements";

const Recommand = (props) => {
  return (
    <React.Fragment>
      <Grid width="360px" heigh="143px" margin="0px auto" padding="20px">
        <Button
          bg="#FFA012"
          border="1px solid #FFA012"
          color="#ffffff "
          radius="10px"
          width="320px"
          height="50px"
          cursor
        >
          선택완료 ( 1 / 10 )
        </Button>
        <Button
          bg="#C8C8C8"
          border="1px solid #C8C8C8"
          color="#ffffff "
          radius="10px"
          width="320px"
          height="50px"
          cursor
        >
          선택완료
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default Recommand;
