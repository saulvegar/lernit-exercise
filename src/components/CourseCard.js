import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles({
  card: {
    width: 300,
    marginLeft: 16
  },
  media: {
    height: 140,
  },
});

const CourseCard = props => {
  const { course } = props;
  const classes = useStyles();
  console.log("Course: ", course);

  return (
    <Card className={classes.card}>
      <CardHeader
        action={
          <IconButton aria-label="Settings">
            <MoreVertIcon />
          </IconButton>
        }
      >
        <CardMedia
          className={classes.media}
          image={course.imageUrl}
          title={course.name}
        />
      </CardHeader>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {course.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CourseCard;
