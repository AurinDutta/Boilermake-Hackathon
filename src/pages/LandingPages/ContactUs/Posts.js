/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";

// Images
import post1 from "assets/images/statue.jpg";
import post2 from "assets/images/isspurdue.jpg";
import post3 from "assets/images/engineeringfountain.jpg";

function Places() {
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            _
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post1}
              title="Timelapse by John Purdue"
              description="Beautiful image of the sky at Memorial Mall, taken by Trevor Mahlmann"
              action={{
                type: "internal",
                route: "pages/LandingPages/ContactUs/Posts",
                color: "info",
                label: "Submit your own image",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post2}
              title="The International Space Station Over Purdue"
              description="taken by Dave Wegiel Photography"
              action={{
                type: "internal",
                route: "pages/LandingPages/ContactUs/Posts",
                color: "info",
                label: "Submit your own image",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post3}
              title="Engineering Fountain Timelapse"
              description="A beautiful timelapse of the sky by Purdue's famous engineering fountain, taken by Trevor Mahlmann."
              action={{
                type: "internal",
                route: "pages/LandingPages/ContactUs/Posts",
                color: "info",
                label: "Submit your own image",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Places;
