import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";

export default function InfoCard({ title, cases, total }) {
  return (
    <Card>
      <CardContent>
        {/* title */}
        <Typography color="textSecondary">{title}title</Typography>

        {/* number of cases */}
        <h2>cases:{cases}</h2>
        {/* total */}
        <Typography color="textSecondary">total:{total}</Typography>
      </CardContent>
    </Card>
  );
}
